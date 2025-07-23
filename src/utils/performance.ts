// Performance utilities for PWA optimization

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload critical fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
  fontLink.as = 'style';
  document.head.appendChild(fontLink);
};

// Lazy load non-critical resources
export const loadNonCriticalResources = () => {
  // Load analytics or other non-critical scripts
  setTimeout(() => {
    // Example: Load analytics
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Add your analytics loading here
    }
  }, 2000);
};

// Image optimization
export const optimizeImage = (url: string, width?: number, quality = 80) => {
  // In a real application, you might use a service like Cloudinary or ImageKit
  // For now, we'll return the original URL
  return url;
};

// Service worker registration
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered successfully:', registration);
      
      // Listen for updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New version available
              console.log('New version available! Please refresh.');
            }
          });
        }
      });
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  }
};

// Critical CSS inlining
export const inlineCriticalCSS = () => {
  const criticalCSS = `
    /* Critical styles for above-the-fold content */
    body { margin: 0; font-family: 'Inter', sans-serif; }
    .hero-section { min-height: 100vh; }
  `;
  
  const style = document.createElement('style');
  style.innerHTML = criticalCSS;
  document.head.appendChild(style);
};

// Resource hints
export const addResourceHints = () => {
  // DNS prefetch for external domains
  const domains = ['fonts.googleapis.com', 'fonts.gstatic.com'];
  
  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = `//${domain}`;
    document.head.appendChild(link);
  });
};

// Initialize performance optimizations
export const initializePerformanceOptimizations = () => {
  // Run on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      preloadCriticalResources();
      addResourceHints();
      loadNonCriticalResources();
    });
  } else {
    preloadCriticalResources();
    addResourceHints();
    loadNonCriticalResources();
  }
};