#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeForDeployment() {
  console.log('🚀 Preparing for Vercel Deployment\n================================');
  
  const distPath = path.join(path.dirname(__dirname), 'dist');
  
  if (!fs.existsSync(distPath)) {
    console.log('❌ Build not found. Run "npm run build" first.');
    return;
  }

  // Check deployment size
  const files = getAllFiles(distPath);
  const totalSize = files.reduce((sum, file) => {
    return sum + fs.statSync(file).size;
  }, 0);
  
  const totalMB = (totalSize / (1024 * 1024)).toFixed(2);
  console.log(`📊 Total deployment size: ${totalMB} MB`);
  
  // Vercel checks
  if (totalSize > 100 * 1024 * 1024) {
    console.log('🚨 WARNING: Deployment size exceeds Vercel limit (100MB)');
  } else if (totalSize > 50 * 1024 * 1024) {
    console.log('⚠️  WARNING: Large deployment size. Consider optimization.');
  } else {
    console.log('✅ Deployment size is acceptable');
  }

  // Find large files
  const assets = files.map(file => {
    const stats = fs.statSync(file);
    const relativePath = path.relative(distPath, file);
    return {
      path: relativePath,
      size: stats.size,
      sizeMB: (stats.size / (1024 * 1024)).toFixed(2)
    };
  });

  const largeFiles = assets.filter(f => f.size > 10 * 1024 * 1024);
  if (largeFiles.length > 0) {
    console.log('\n🔍 Large files detected:');
    largeFiles.forEach(file => {
      console.log(`   ${file.path} - ${file.sizeMB} MB`);
    });
  }

  // Performance recommendations
  console.log('\n💡 Deployment Recommendations:');
  
  const videoFiles = assets.filter(f => f.path.includes('.mp4'));
  if (videoFiles.length > 0) {
    console.log('📹 Consider hosting videos on external service (YouTube, Vimeo, etc.)');
  }
  
  const largeImages = assets.filter(f => 
    f.path.includes('.jpg') || f.path.includes('.png') && f.size > 500 * 1024
  );
  if (largeImages.length > 0) {
    console.log('🖼️  Optimize large images before deployment');
  }

  console.log('\n🚀 Ready to deploy commands:');
  console.log('   npm install -g vercel');
  console.log('   vercel');
  console.log('   vercel --prod');
}

function getAllFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(getAllFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  
  return files;
}

optimizeForDeployment();
