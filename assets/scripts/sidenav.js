(function sidenav() {
  'use strict';

  // DOM Elements
  const sidenav = document.querySelector('.sidenav');
  const sidenavTriggers = document.getElementsByClassName('sidenav-trigger');


  // Click Event listeners
  document.addEventListener('click', hideSidenav);

  for(const trigger of sidenavTriggers) {
    trigger.addEventListener('click', toggleSidenav);
  }
  

  // Hide and toggle functions
  function toggleSidenav() {
    sidenav.classList.toggle('active');
  }

  function hideSidenav(event) {
    if(!event.target.closest('.sidenav') && !event.target.closest('.header__menu')) {
      sidenav.classList.remove('active');
    }
  }

})();
