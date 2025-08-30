// Performance monitoring and loading utilities

export interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
}

export class PerformanceMonitor {
  private startTime: number;
  private metrics: Partial<PerformanceMetrics> = {};

  constructor() {
    this.startTime = Date.now();
    this.initializeMonitoring();
  }

  private initializeMonitoring() {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.largestContentfulPaint = lastEntry.startTime;
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.firstContentfulPaint = entry.startTime;
          }
        });
      });
      fcpObserver.observe({ type: 'paint', buffered: true });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        this.metrics.cumulativeLayoutShift = clsValue;
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true });
    }

    // DOM Content Loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.metrics.domContentLoaded = Date.now() - this.startTime;
      });
    } else {
      this.metrics.domContentLoaded = 0;
    }

    // Page Load Complete
    window.addEventListener('load', () => {
      this.metrics.loadTime = Date.now() - this.startTime;
      this.logMetrics();
    });
  }

  public getMetrics(): Partial<PerformanceMetrics> {
    return { ...this.metrics };
  }

  public logMetrics(): void {
    console.log('Performance Metrics:', this.metrics);
  }

  public isSlowLoading(threshold: number = 3000): boolean {
    return (Date.now() - this.startTime) > threshold;
  }
}

// Loading state management
export class LoadingManager {
  private static instance: LoadingManager;
  private loadingStates: Map<string, boolean> = new Map();
  private timeouts: Map<string, NodeJS.Timeout> = new Map();

  static getInstance(): LoadingManager {
    if (!LoadingManager.instance) {
      LoadingManager.instance = new LoadingManager();
    }
    return LoadingManager.instance;
  }

  setLoading(key: string, isLoading: boolean, timeout?: number): void {
    this.loadingStates.set(key, isLoading);

    // Clear existing timeout
    const existingTimeout = this.timeouts.get(key);
    if (existingTimeout) {
      clearTimeout(existingTimeout);
    }

    // Set safety timeout
    if (isLoading && timeout) {
      const timeoutId = setTimeout(() => {
        console.warn(`Loading timeout for ${key}, forcing completion`);
        this.setLoading(key, false);
      }, timeout);
      this.timeouts.set(key, timeoutId);
    }
  }

  isLoading(key: string): boolean {
    return this.loadingStates.get(key) || false;
  }

  isAnyLoading(): boolean {
    return Array.from(this.loadingStates.values()).some(loading => loading);
  }

  clearAll(): void {
    this.loadingStates.clear();
    this.timeouts.forEach(timeout => clearTimeout(timeout));
    this.timeouts.clear();
  }
}

// Resource loading utilities
export const loadResourceWithTimeout = (
  url: string, 
  type: 'script' | 'style' = 'script',
  timeout: number = 10000
): Promise<void> => {
  return new Promise((resolve, reject) => {
    const element = type === 'script' 
      ? document.createElement('script')
      : document.createElement('link');

    const timeoutId = setTimeout(() => {
      reject(new Error(`Resource load timeout: ${url}`));
    }, timeout);

    const cleanup = () => {
      clearTimeout(timeoutId);
    };

    if (type === 'script') {
      const script = element as HTMLScriptElement;
      script.src = url;
      script.onload = () => {
        cleanup();
        resolve();
      };
      script.onerror = () => {
        cleanup();
        reject(new Error(`Failed to load script: ${url}`));
      };
    } else {
      const link = element as HTMLLinkElement;
      link.rel = 'stylesheet';
      link.href = url;
      link.onload = () => {
        cleanup();
        resolve();
      };
      link.onerror = () => {
        cleanup();
        reject(new Error(`Failed to load stylesheet: ${url}`));
      };
    }

    document.head.appendChild(element);
  });
};

// Initialize performance monitoring
export const performanceMonitor = new PerformanceMonitor();
export const loadingManager = LoadingManager.getInstance();
