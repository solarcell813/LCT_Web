(function () {
  // Provide base toggleMobile for pages that don't define it (index.html)
  if (typeof window.toggleMobile !== 'function') {
    window.toggleMobile = function () {
      document.getElementById('navLinks').classList.toggle('open');
    };
  }

  // Wrap toggleMobile to sync burger .active class with nav .open
  var _base = window.toggleMobile;
  window.toggleMobile = function () {
    _base();
    var burger = document.querySelector('.nav-burger');
    var nav    = document.getElementById('navLinks');
    if (burger && nav) {
      burger.classList.toggle('active', nav.classList.contains('open'));
    }
  };

  // Close menu when clicking outside nav
  document.addEventListener('click', function (e) {
    var nav    = document.getElementById('navLinks');
    var burger = document.querySelector('.nav-burger');
    if (nav && nav.classList.contains('open')) {
      if (!nav.contains(e.target) && !(burger && burger.contains(e.target))) {
        nav.classList.remove('open');
        if (burger) burger.classList.remove('active');
      }
    }
  });
}());
