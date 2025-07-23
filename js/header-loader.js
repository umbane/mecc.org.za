// Header component loader
function loadHeader() {
  fetch('inc/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
      
      // Execute any scripts in the loaded content
      const scripts = document.getElementById('header-placeholder').getElementsByTagName('script');
      for (let script of scripts) {
        const newScript = document.createElement('script');
        newScript.textContent = script.textContent;
        document.head.appendChild(newScript);
      }
      
      // Load navigation component after header is loaded
      const navScript = document.createElement('script');
      navScript.src = 'inc/nav-component.js';
      document.head.appendChild(navScript);
    })
    .catch(error => {
      console.error('Error loading header:', error);
      // Fallback: show a basic header
      document.getElementById('header-placeholder').innerHTML = `
        <nav class="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
          <div class="container">
            <a class="navbar-brand text-brand" href="index.html">Muizenberg <span class="color-b">Electricity</span> Co-Op</a>
          </div>
        </nav>
      `;
    });
}

// Load header when DOM is ready
document.addEventListener('DOMContentLoaded', loadHeader);