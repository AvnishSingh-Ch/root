// Mobile performance optimizations
(function() {
  'use strict';

  // Check if device is mobile
  const isMobile = window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (!isMobile) return;

  // Disable heavy animations on mobile
  const disableAnimations = () => {
    const style = document.createElement('style');
    style.textContent = `
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    `;
    document.head.appendChild(style);
  };

  // Lazy load images
  const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  };

  // Optimize touch events
  const optimizeTouchEvents = () => {
    // Use passive event listeners for better scroll performance
    document.addEventListener('touchstart', () => {}, { passive: true });
    document.addEventListener('touchmove', () => {}, { passive: true });
    document.addEventListener('touchend', () => {}, { passive: true });
  };

  // Reduce JavaScript execution on mobile
  const optimizeJavaScript = () => {
    // Disable medium-zoom on mobile for better performance
    if (window.mediumZoom) {
      window.mediumZoom.destroy();
    }

    // Simplify copy button functionality
    const copyButtons = document.querySelectorAll('.copy');
    copyButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const codeBlock = this.closest('.highlight').querySelector('.code');
        if (codeBlock && navigator.clipboard) {
          navigator.clipboard.writeText(codeBlock.textContent).then(() => {
            this.textContent = '✓';
            setTimeout(() => {
              this.innerHTML = 'Copy';
            }, 1000);
          });
        }
      });
    });
  };

  // Optimize fonts loading
  const optimizeFonts = () => {
    // Use system fonts on mobile for better performance
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 768px) {
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
        }
      }
    `;
    document.head.appendChild(style);
  };

  // Reduce layout shifts
  const reduceLayoutShifts = () => {
    // Add aspect ratio to images without dimensions
    const images = document.querySelectorAll('img:not([width]):not([height])');
    images.forEach(img => {
      img.style.aspectRatio = '16/9';
    });
  };

  // Initialize optimizations
  const init = () => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion || isMobile) {
      disableAnimations();
    }

    lazyLoadImages();
    optimizeTouchEvents();
    optimizeJavaScript();
    optimizeFonts();
    reduceLayoutShifts();

    // Add mobile-specific class to body
    document.body.classList.add('mobile-optimized');
  };

  // Run optimizations when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Re-run optimizations on page transitions (for SPA behavior)
  document.addEventListener('swup:page:view', init);

})();