'use strict'
// --------------- ОПРЕДЕЛНИЕ УСТРОЙСТВА

const isMobile = {
  Android: function() {
    return navigator.userAgent.match (/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match (/BlackBerry/i);
  },
  IOS: function () {
    return navigator.userAgent.match (/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match (/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match (/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.IOS() ||
      isMobile.Opera() ||
      isMobile.Windows());
  }
};

if (isMobile.any()) {
  document.body.classList.add ('_touch');

  let menuArrows = document.querySelectorAll('.menu__arrow');
  if(menuArrows.length > 0){
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener("click", function(e) {
        menuArrow.parentElement.classList.toggle('_active');
      });
    }
  }

} else {
  document.body.classList.add ('_pc');
};

// ---------------КНОПКА "НАВЕРХ" 
var goTopBtn = document.querySelector('.back_to_top');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);

function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  (function() {
    'use strict';
  
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }
  
    var goTopBtn = document.querySelector('.back_to_top');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();

// Навигация по сайту


const menuLinks = document.querySelectorAll ('.menu__link[data-goto], .menu__sub-link[data-goto]');

if(menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener ("click", onMenuLinkClick);
  });

        function onMenuLinkClick (e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
            });
            e.prevenDefault();
        }
    }
}