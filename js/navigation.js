document.addEventListener('DOMContentLoaded', function () {
  // Handle links that point to index.html sections
  document.querySelectorAll('a[href*="index.html#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const currentPath = window.location.pathname;

      // If we're not on index.html, let the navigation happen
      if (!currentPath.endsWith('index.html')) {
        return;
      }

      e.preventDefault();
      const sectionId = this.getAttribute('href').split('#')[1];
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
        });

        // Update URL without triggering scroll
        history.pushState(null, null, `#${sectionId}`);
      }
    });
  });

  // Check if there's a hash in URL when loading index.html
  if (window.location.hash && window.location.pathname.endsWith('index.html')) {
    const element = document.querySelector(window.location.hash);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
        });
      }, 100);
    }
  }
});
