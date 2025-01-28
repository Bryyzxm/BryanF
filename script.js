// klik dimana saja untuk menghilangkan dropdown menu
document.addEventListener('click', function (event) {
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navbarToggler = document.querySelector('.navbar-toggler');

  if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  }
});

function switchLanguage(lang) {
  // Save selected language to localStorage
  localStorage.setItem('selectedLanguage', lang);

  // Update all translatable elements
  document.querySelectorAll('[data-translate]').forEach((element) => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update active state in dropdown
  document.querySelectorAll('[data-lang]').forEach((item) => {
    if (item.getAttribute('data-lang') === lang) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Language switcher click handlers
document.querySelectorAll('[data-lang]').forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const lang = e.target.getAttribute('data-lang');
    switchLanguage(lang);
  });
});

// Load saved language preference or default to 'id'
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('selectedLanguage') || 'id';
  switchLanguage(savedLang);
});
