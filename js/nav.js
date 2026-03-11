const hamburger = document.getElementById('hamburger');
const sideNav = document.getElementById('sideNav');

function openNav() {
  sideNav.classList.add('open');
  document.body.classList.add('nav-open');
  hamburger.setAttribute('aria-expanded', 'true');
}

function closeNav() {
  sideNav.classList.remove('open');
  document.body.classList.remove('nav-open');
  hamburger.setAttribute('aria-expanded', 'false');
}

function toggleNav(e) {
  e.stopPropagation();

  if (sideNav.classList.contains('open')) {
    closeNav();
  } else {
    openNav();
  }
}

hamburger.addEventListener('click', toggleNav);

hamburger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleNav(e);
  }
});

document.addEventListener('click', (e) => {
  const isClickInsideNav = sideNav.contains(e.target);
  const isClickOnHamburger = hamburger.contains(e.target);

  if (!isClickInsideNav && !isClickOnHamburger) {
    closeNav();
  }
});

window.addEventListener('resize', () => {
  closeNav();
});