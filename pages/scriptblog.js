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
