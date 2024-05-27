
jQuery(document).ready(function ($) {
  jQuery('.mobile-nav .menu-item-has-children').on('click', function (e) {
    if (jQuery(this).hasClass('active')) {
      jQuery(this).removeClass('active');
    } else {
      jQuery('.mobile-nav .menu-item-has-children').removeClass('active');
      jQuery(this).addClass('active');
    }
  });
  jQuery('#nav-icon4').click(function ($) {
    jQuery('#mobile-nav').toggleClass('open');
  });
  jQuery('#res-cross').click(function ($) {
    jQuery('#mobile-nav').removeClass('open');
  });
  jQuery('.bar-menu').click(function ($) {
    jQuery('#mobile-nav').toggleClass('open');
    jQuery('#mobile-nav').toggleClass('hmburger-menu');
    jQuery('#mobile-nav').show();
  });
  jQuery('#res-cross').click(function ($) {
    jQuery('#mobile-nav').removeClass('open');
  });
});
/***--------  search-box   ------- ***/
if (jQuery('.search-box-outer').length) {
  jQuery('.search-box-outer').on('click', function () {
    jQuery('body').addClass('search-active');
  });
  jQuery('.close-search').on('click', function () {
    jQuery('body').removeClass('search-active');
  });
}

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#45D0BD ${scrollValue}%, #ffffff00 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


var boxWidth = $("#lightbox").width();
$(".white_content").animate({
  opacity: 0,
  width: 0,
  left: -10000
});
$("#close").on('click', function () {
  $(".white_content").animate({
    opacity: 0,
    width: 0,
    left: -1000
  });
});
$("#show").on('click', function () {
  $(".white_content").animate({
    opacity: 1,
    width: 500,
    left: 0
  });
  $("#overlay").animate({
    opacity: 1,
    width: boxWidth,
    left: 0
  });

});



/*------testimonials-------*/
if ($('.testmonial-carousal').length) {
  $('.testmonial-carousal').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    items: 2,
    mouseDrag: true,
    touchDrag: true,
    // autoplay: true,
    // autoplayTimeout:5000,
    navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1024: {
        items: 2
      },
    }
  });
}

// 1. preloader
$("#preloader").fadeOut(600);
$(".preloader-bg").delay(400).fadeOut(600);


if ($.isFunction($.fn.owlCarousel)) {
  $('.testimonials-slider').owlCarousel({
    loop: true,
    dot: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
    responsive: {
      0: {
        items: 1
      },
      1000: {
        items: 1
      },
      1400: {
        items: 4
      }
    }
  })
}

jQuery(document).ready(function ($) {
  if ($.isFunction($.fn.owlCarousel)) {
    $('.testimonials-slider-two').owlCarousel({
      loop: true,
      dot: true,
      nav: true,
      autoplay: true,
      margin: 0,
      autoplayTimeout: 3000,
      navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
      responsive: {
        0: {
          items: 1
        },
        1000: {
          items: 1
        },
        1200: {
          items: 1
        }
      }
    })
  }
});



