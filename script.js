// for opening the search form on click

document.addEventListener('DOMContentLoaded', function () {
  var searchIcon = document.querySelector('.search-icon');
  var searchBox = document.querySelector('.search-box');

  searchIcon.addEventListener('click', function (event) {
      searchBox.classList.toggle('open');

      event.stopPropagation();
  });

  // Close search-box when clicking outside of it
  document.addEventListener('click', function () {
      searchBox.classList.remove('open');
  });

  // Prevent clicks inside the search box from closing it
  searchBox.addEventListener('click', function (event) {
      event.stopPropagation();
  });
});





// slider

const swiper = new Swiper('.myslider', {
   loop: true,
   pagination: {
     el: '.swiper-pagination',
   },

 });



//  multi-produccts swiper
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 3,
    },
  },
});




// multiple tabs
document.addEventListener("DOMContentLoaded", function() {
  // Set the first tab as active by default
  openTab('tab1');

  document.getElementById('defaultTab').classList.add('active');
});

function openTab(tabName) {
  var i, tabContent;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";

  // Optional: Remove the "active" class from all tabs and add it to the current tab
  var tabs = document.getElementsByClassName("tab");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
  document.getElementById('defaultTab').classList.add('active');
}
