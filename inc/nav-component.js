// Navigation component with active state management
class MECCNavigation {
  constructor() {
    this.currentPage = window.location.pathname.split('/').pop() || 'index.html';
    this.init();
  }

  init() {
    this.setActiveStates();
    this.bindEvents();
  }

  setActiveStates() {
    // Remove all active classes
    document.querySelectorAll('.nav-link, .dropdown-item').forEach(item => {
      item.classList.remove('active');
    });

    // Set active based on current page
    const activeSelectors = {
      'index.html': '.nav-link[href="index.html"]',
      'contact.html': '.nav-link[href="contact.html"]',
      'gallery.html': '.dropdown-item[href="gallery.html"]',
      'video.html': '.dropdown-item[href="video.html"]',
      'membership.html': '.dropdown-item[href="membership.html"]',
      'principles.html': '.dropdown-item[href="principles.html"]',
      'survey.html': '.dropdown-item[href="survey.html"]'
    };

    const selector = activeSelectors[this.currentPage];
    if (selector) {
      const activeElement = document.querySelector(selector);
      if (activeElement) {
        activeElement.classList.add('active');
        
        // Also activate parent dropdown if it's a dropdown item
        const parentDropdown = activeElement.closest('.dropdown');
        if (parentDropdown) {
          const dropdownToggle = parentDropdown.querySelector('.dropdown-toggle');
          if (dropdownToggle) {
            dropdownToggle.classList.add('active');
          }
        }
      }
    }
  }

  bindEvents() {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new MECCNavigation();
});