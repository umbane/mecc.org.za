// Performance optimizations for MECC website

// Lazy load images
function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// Preload critical resources
function preloadCriticalResources() {
  const criticalResources = [
    'css/style.css',
    'lib/bootstrap/css/bootstrap.min.css',
    'lib/font-awesome/css/font-awesome.min.css'
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = resource;
    document.head.appendChild(link);
  });
}

// Defer non-critical JavaScript
function deferNonCriticalJS() {
  const nonCriticalScripts = [
    'lib/owlcarousel/owl.carousel.min.js',
    'lib/scrollreveal/scrollreveal.min.js'
  ];

  nonCriticalScripts.forEach(script => {
    const scriptElement = document.createElement('script');
    scriptElement.src = script;
    scriptElement.defer = true;
    document.body.appendChild(scriptElement);
  });
}

// Optimize carousel loading
function optimizeCarousel() {
  // Only load carousel if it exists on the page
  if (document.querySelector('.owl-carousel')) {
    // Initialize carousel with performance settings
    if (typeof $ !== 'undefined' && $.fn.owlCarousel) {
      $('.owl-carousel').owlCarousel({
        lazyLoad: true,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          992: { items: 3 }
        }
      });
    }
  }
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', function() {
  // Run optimizations
  lazyLoadImages();
  preloadCriticalResources();
  
  // Defer heavy operations
  setTimeout(() => {
    deferNonCriticalJS();
    optimizeCarousel();
  }, 100);
});

// Service Worker registration for caching
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js')
      .then(function(registration) {
        console.log('SW registered: ', registration);
      })
      .catch(function(registrationError) {
        console.log('SW registration failed: ', registrationError);
      });
  });
}