(function () {
  var navBtn = document.getElementById('nav-toggle');
  var panel = document.getElementById('mobile-nav-panel');
  if (navBtn && panel) {
    navBtn.addEventListener('click', function () {
      var open = panel.hasAttribute('hidden');
      if (open) {
        panel.removeAttribute('hidden');
        panel.classList.add('open');
        navBtn.setAttribute('aria-expanded', 'true');
      } else {
        panel.setAttribute('hidden', '');
        panel.classList.remove('open');
        navBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var drawer = document.getElementById('sidebar-drawer');
  var sbBtns = document.querySelectorAll('.sidebar-toggle');
  var closeBtn = document.getElementById('sidebar-close');
  var backdrop = drawer && drawer.querySelector('.drawer-backdrop');

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    sbBtns.forEach(function (b) {
      b.setAttribute('aria-expanded', 'true');
    });
    document.documentElement.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    sbBtns.forEach(function (b) {
      b.setAttribute('aria-expanded', 'false');
    });
    document.documentElement.style.overflow = '';
  }

  sbBtns.forEach(function (b) {
    b.addEventListener('click', openDrawer);
  });
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer();
  });

  var now = new Date();
  document.querySelectorAll('[data-live-year]').forEach(function (n) {
    n.textContent = String(now.getFullYear());
  });
})();
