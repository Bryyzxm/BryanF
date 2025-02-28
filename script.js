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

// Fungsi untuk mengganti bahasa
function changeLanguage(lang) {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Tambahkan fungsi untuk menangani active state bahasa
function setActiveLanguage(lang) {
  document.querySelectorAll('[data-lang]').forEach((item) => {
    if (item.getAttribute('data-lang') === lang) {
      item.setAttribute('data-active', 'true');
    } else {
      item.setAttribute('data-active', 'false');
    }
  });
}

// Update event listener bahasa
document.querySelectorAll('[data-lang]').forEach((langItem) => {
  langItem.addEventListener('click', () => {
    const lang = langItem.getAttribute('data-lang');
    changeLanguage(lang);
    setActiveLanguage(lang);
  });
});

// Set bahasa default saat halaman dimuat
setActiveLanguage('id');

// Event listener untuk tombol bahasa
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const lang = this.getAttribute('data-lang');
      changeLanguage(lang);
    });
  });
});
