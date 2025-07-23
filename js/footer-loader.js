// Footer component loader
function loadFooter() {
  fetch('inc/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
      
      // Execute any scripts in the loaded content
      const scripts = document.getElementById('footer-placeholder').getElementsByTagName('script');
      for (let script of scripts) {
        const newScript = document.createElement('script');
        newScript.textContent = script.textContent;
        document.head.appendChild(newScript);
      }
    })
    .catch(error => {
      console.error('Error loading footer:', error);
      // Fallback: show a basic footer
      document.getElementById('footer-placeholder').innerHTML = `
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <p>&copy; ${new Date().getFullYear()} Muizenberg Electricity Co-Op. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      `;
    });
}

// Load footer when DOM is ready
document.addEventListener('DOMContentLoaded', loadFooter);