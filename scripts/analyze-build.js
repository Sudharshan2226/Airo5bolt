#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Analyze build output
function analyzeBuild() {
  const distPath = path.join(path.dirname(__dirname), 'dist');
  
  if (!fs.existsSync(distPath)) {
    console.log('❌ Build not found. Run "npm run build" first.');
    return;
  }

  console.log('📊 Build Analysis\n=================');
  
  // Get all files in dist
  const files = getAllFiles(distPath);
  const assets = files.map(file => {
    const stats = fs.statSync(file);
    const relativePath = path.relative(distPath, file);
    return {
      path: relativePath,
      size: stats.size,
      sizeKB: (stats.size / 1024).toFixed(2),
      sizeMB: (stats.size / (1024 * 1024)).toFixed(2),
      ext: path.extname(file)
    };
  });

  // Sort by size
  assets.sort((a, b) => b.size - a.size);

  // Group by type
  const grouped = assets.reduce((acc, asset) => {
    const type = getAssetType(asset.ext);
    if (!acc[type]) acc[type] = [];
    acc[type].push(asset);
    return acc;
  }, {});

  // Show largest files
  console.log('🔍 Largest Assets:');
  assets.slice(0, 10).forEach((asset, i) => {
    console.log(`${i + 1}. ${asset.path} - ${asset.sizeKB} KB`);
  });

  console.log('\n📁 Assets by Type:');
  Object.entries(grouped).forEach(([type, files]) => {
    const totalSize = files.reduce((sum, file) => sum + file.size, 0);
    const totalKB = (totalSize / 1024).toFixed(2);
    console.log(`${type}: ${files.length} files - ${totalKB} KB`);
  });

  // Performance recommendations
  console.log('\n💡 Performance Recommendations:');
  
  const jsFiles = assets.filter(a => a.ext === '.js');
  const largeJS = jsFiles.find(f => f.size > 500 * 1024);
  if (largeJS) {
    console.log('⚠️  Large JavaScript bundle detected. Consider code splitting.');
  }

  const images = assets.filter(a => ['.jpg', '.jpeg', '.png', '.gif'].includes(a.ext));
  const largeImages = images.filter(f => f.size > 100 * 1024);
  if (largeImages.length > 0) {
    console.log(`⚠️  ${largeImages.length} large images found. Consider optimization.`);
  }

  const totalSize = assets.reduce((sum, asset) => sum + asset.size, 0);
  console.log(`\n📊 Total Bundle Size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
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

function getAssetType(ext) {
  if (['.js', '.jsx', '.ts', '.tsx'].includes(ext)) return 'JavaScript';
  if (['.css', '.scss', '.sass'].includes(ext)) return 'Styles';
  if (['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'].includes(ext)) return 'Images';
  if (['.mp4', '.webm', '.ogg'].includes(ext)) return 'Videos';
  if (['.woff', '.woff2', '.ttf', '.otf'].includes(ext)) return 'Fonts';
  return 'Other';
}

analyzeBuild();
