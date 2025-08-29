import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

// Function to send performance data to console or analytics service
function sendToAnalytics(metric: any) {
  console.log('📊 Performance Metric:', {
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    delta: metric.delta,
    id: metric.id,
  });
  
  // You can send this data to analytics services like Google Analytics, etc.
  // Example: gtag('event', metric.name, { value: metric.value });
}

// Initialize Web Vitals monitoring
export function initPerformanceMonitoring() {
  console.log('🚀 Performance monitoring initialized');
  
  onCLS(sendToAnalytics);
  onINP(sendToAnalytics);
  onFCP(sendToAnalytics);
  onLCP(sendToAnalytics);
  onTTFB(sendToAnalytics);
}

// Performance scoring helper
export function getPerformanceScore(metrics: { [key: string]: number }) {
  const weights = {
    LCP: 0.25, // Largest Contentful Paint
    FID: 0.25, // First Input Delay
    CLS: 0.25, // Cumulative Layout Shift
    FCP: 0.15, // First Contentful Paint
    TTFB: 0.10, // Time to First Byte
  };

  let score = 0;
  Object.entries(metrics).forEach(([key, value]) => {
    const weight = weights[key as keyof typeof weights] || 0;
    // This is a simplified scoring system
    const normalizedScore = Math.max(0, 100 - value);
    score += normalizedScore * weight;
  });

  return Math.round(score);
}
