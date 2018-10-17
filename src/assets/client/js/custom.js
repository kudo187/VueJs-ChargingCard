/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Timer
5. Init Favorite
6. Init Fix Product Border
7. Init Isotope Filtering
8. Init Slider
******************************/
    $( document ).ready(function() {
    $('#cssmenu li.has-sub>a').on('click', function(){
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
          element.removeClass('open');
          element.find('li').removeClass('open');
          element.find('ul').slideUp();
        }
        else {
          element.addClass('open');
          element.children('ul').slideDown();
          element.siblings('li').children('ul').slideUp();
          element.siblings('li').removeClass('open');
          element.siblings('li').find('li').removeClass('open');
          element.siblings('li').find('ul').slideUp();
        }
      });
    
      $('#cssmenu>ul>li.has-sub>a').append('<span class="holder"></span>');
    
      if ($('#cssmenu').length != 0){
        (function getColor() {
          var r, g, b;
          var textColor = $('#cssmenu').css('color');
          textColor = textColor.slice(4);
          r = textColor.slice(0, textColor.indexOf(','));
          textColor = textColor.slice(textColor.indexOf(' ') + 1);
          g = textColor.slice(0, textColor.indexOf(','));
          textColor = textColor.slice(textColor.indexOf(' ') + 1);
          b = textColor.slice(0, textColor.indexOf(')'));
          var l = rgbToHsl(r, g, b);
          if (l > 0.7) {
            // $('#cssmenu>ul>li>a').css('text-shadow', '0 1px 1px rgba(0, 0, 0, .35)');
            $('#cssmenu>ul>li>a>span').css('border-color', 'rgba(0, 0, 0, .35)');
          }
          else
          {
            // $('#cssmenu>ul>li>a').css('text-shadow', '0 1px 0 rgba(255, 255, 255, .35)');
            $('#cssmenu>ul>li>a>span').css('border-color', 'rgba(255, 255, 255, .35)');
          }
        })();
      }
    
      function rgbToHsl(r, g, b) {
          r /= 255, g /= 255, b /= 255;
          var max = Math.max(r, g, b), min = Math.min(r, g, b);
          var h, s, l = (max + min) / 2;
    
          if(max == min){
              h = s = 0;
          }
          else {
              var d = max - min;
              s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
              switch(max){
                  case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                  case g: h = (b - r) / d + 2; break;
                  case b: h = (r - g) / d + 4; break;
              }
              h /= 6;
          }
          return l;
      }


      //Jquery menu
        "use strict";
    
        /* 
      
        1. Vars and Inits
      
        */
    
        var header = $('.header');
        var topNav = $('.top_nav')
        var mainSlider = $('.main_slider');
        var hamburger = $('.hamburger_container');
        var menu = $('.hamburger_menu');
        var menuActive = false;
        var hamburgerClose = $('.hamburger_close');
        var fsOverlay = $('.fs_menu_overlay');
    
        setHeader();
    
        $(window).on('resize', function () {
          // initFixProductBorder();
          setHeader();
        });
    
        $(document).on('scroll', function () {
          setHeader();
        });
    
        initMenu();
        // initTimer();
        // initFavorite();
        // initFixProductBorder();
        // initIsotopeFiltering();
        // initSlider();
    
        /* 
      
        2. Set Header
      
        */
    
        function setHeader() {
          if (window.innerWidth < 992) {
            if ($(window).scrollTop() > 100) {
              header.css({ 'top': "0" });
            }
            else {
              header.css({ 'top': "10" });
            }
          }
          else {
            if ($(window).scrollTop() > 100) {
              header.css({ 'top': "-15px" });
            }
            else {
              header.css({ 'top': "0" });
            }
          }
          if (window.innerWidth > 991 && menuActive) {
            closeMenu();
          }
        }
    
        /* 
      
        3. Init Menu
      
        */
    
        function initMenu() {
          if (hamburger.length) {
            hamburger.on('click', function () {
              if (!menuActive) {
                openMenu();
              }
            });
          }
    
          if (fsOverlay.length) {
            fsOverlay.on('click', function () {
              if (menuActive) {
                closeMenu();
              }
            });
          }
    
          if (hamburgerClose.length) {
            hamburgerClose.on('click', function () {
              if (menuActive) {
                closeMenu();
              }
            });
          }
    
          if ($('.menu_item').length) {
            var items = document.getElementsByClassName('menu_item');
            var i;
    
            for (i = 0; i < items.length; i++) {
              if (items[i].classList.contains("has-children")) {
                items[i].onclick = function () {
                  this.classList.toggle("active");
                  var panel = this.children[1];
                  if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                  }
                  else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                  }
                }
              }
            }
          }
        }
    
        function openMenu() {
          menu.addClass('active');
          // menu.css('right', "0");
          fsOverlay.css('pointer-events', "auto");
          menuActive = true;
        }
    
        function closeMenu() {
          menu.removeClass('active');
          fsOverlay.css('pointer-events', "none");
          menuActive = false;
        }
    
        /* 
      
        4. Init Timer
      
        */
    
        
       $('#fixedtotop').hide();
       //Check to see if the window is top if not then display button
       $(window).scroll(function () {       
           if ($(this).scrollTop() > 100) {
               $('#fixedtotop').fadeIn();
           } else {
               $('#fixedtotop').fadeOut();
           }
       });
   
       //Click event to scroll to top
       $('#fixedtotop').click(function () {
           $('html, body').animate({ scrollTop: 0 }, 800);
           return false;
       });
    



    });
