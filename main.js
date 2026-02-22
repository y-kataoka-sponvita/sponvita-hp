(function () {
  'use strict';

  var header = document.getElementById('header');
  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('navToggle');
  var navLinks = nav ? nav.querySelectorAll('a') : [];

  // モバイルメニュー開閉
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  // ナビリンククリックでモバイルメニューを閉じる
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (nav && window.innerWidth <= 768) {
        nav.classList.remove('is-open');
        if (navToggle) {
          navToggle.setAttribute('aria-label', 'メニューを開く');
          navToggle.setAttribute('aria-expanded', 'false');
        }
        document.body.style.overflow = '';
      }
    });
  });

  // スクロール時にヘッダー背景を少し強調（オプション）
  if (header) {
    var lastScroll = 0;
    window.addEventListener('scroll', function () {
      var current = window.scrollY;
      if (current > 60) {
        header.style.background = 'rgba(12, 15, 20, 0.95)';
      } else {
        header.style.background = 'rgba(12, 15, 20, 0.85)';
      }
      lastScroll = current;
    }, { passive: true });
  }
})();
