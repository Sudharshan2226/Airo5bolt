// Performance monitoring script for browser console

(function() {
  'use strict';
  
  console.log('🚀 AIRO 5.0 Performance Monitor Active');
  
  // Monitor page load performance
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType('navigation')[0];
      
      console.log('📊 Page Load Performance:');
      console.log(`- DOM Content Loaded: ${Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart)}ms`);
      console.log(`- Page Load Complete: ${Math.round(perfData.loadEventEnd - perfData.loadEventStart)}ms`);
      console.log(`- Total Load Time: ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
      
      // Check for slow resources
      const resources = performance.getEntriesByType('resource');
      const slowResources = resources.filter(resource => resource.duration > 2000);
      
      if (slowResources.length > 0) {
        console.warn('⚠️ Slow loading resources detected:');
        slowResources.forEach(resource => {
          console.warn(`- ${resource.name}: ${Math.round(resource.duration)}ms`);
        });
      }
      
      // Monitor Core Web Vitals if available
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            console.log(`🎯 ${entry.name}: ${Math.round(entry.value)}ms`);
          });
        });
        
        observer.observe({ type: 'measure', buffered: true });
      }
      
    }, 1000);
  });
  
  // Monitor loading states
  let loadingStates = {};
  
  window.monitorLoading = {
    setLoading: (key, isLoading) => {
      loadingStates[key] = isLoading;
      console.log(`🔄 Loading state changed: ${key} = ${isLoading}`);
    },
    
    getLoadingStates: () => {
      console.log('📋 Current loading states:', loadingStates);
      return loadingStates;
    },
    
    isAnyLoading: () => {
      const anyLoading = Object.values(loadingStates).some(state => state);
      console.log(`❓ Any loading: ${anyLoading}`);
      return anyLoading;
    }
  };
  
  // Detect potential loading issues
  setTimeout(() => {
    if (document.readyState !== 'complete') {
      console.warn('⚠️ Page still loading after 10 seconds - potential issue detected');
    }
  }, 10000);
  
})();
