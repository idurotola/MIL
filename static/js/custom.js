$(function (){
    "use strict";
    var wind = $(window);
     //smooth scroll
    $('.navbar-nav').singlePageNav({
        speed:1000,
        currentClass:'active',
        offset:60
    });

     // navbar scrolling background
    wind.on("scroll",function () {
        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar-default");
        if(bodyScroll > 300){
            navbar.addClass("nav-scroll");
        }else{
            navbar.removeClass("nav-scroll");
        }
    });

    // owlCarousel
    $('.clients .owl-carousel').owlCarousel({
        items:1,
        loop:true,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500,
        nav:true,
        navText:['<span> <i class="fa fa-angle-left" arihidden="true"></i> </span>',
        '<span> <i class="fa fa-angle-right" arihidden="true"></i> </span>'],
        responsiveClass:true,
        responsive:{
            0:{
                nav:false,
                dots:true
            },
            600:{
                nav:false
            },
            1000:{
                nav:true,
                dots:false
            }
        }

    });



     // accordion
    $(".accordion").on("click",".accordion-icon", function () {

        $(this).next().slideDown();

        $(".accordion-info").not($(this).next()).slideUp();

    });



    //smooth button scroll
    $('.button-scroll').on('click', function(){
      
        var scrollTo = $(this).attr('datscrollTo');

        $('body, html').animate({

        "scrollTop": $('#'+scrollTo).offset().top - 60
        }, 1000 );

    });


    // magnificPopup
    $('.portfolio .link').magnificPopup({
      delegate: 'a',
      type: 'image'
    });


    // stellar
    wind.stellar();



    // isotope
    $('.gallery').isotope({
      // options
      itemSelector: '.item-img'
    });

    var $gallery = $('.gallery').isotope({
      // options
    });

    // filter items on button click
    $('.filtering').on( 'click', 'span', function() {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({ filter: filterValue });

    });

    $('.filtering').on( 'click', 'span', function() {

        $(this).addClass('active').siblings().removeClass('active');

    });

});


var arrayToObject = function (array) {
    var data = {};
    array.forEach(function(obj) {
        data[obj.name] = obj.value;
    });

    return data;
};

// Preloader

$(window).on("load",function (){
    console.log('the window has loaded here');
    // loading page
    $(".loading").fadeOut(500);
     // contact form
    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        e.preventDefault();
        var url = "/message";

        $.ajax({
            type: "POST",
            url: url,
            data: $(this).serialize(),
            success: function (data) {
                var messageAlert = 'alert-success';
                var messageText = 'Your message was successfully sent. Thank You!';

                var alertBox = '<div class="alert ' + messageAlert;
                alertBox += ' alert-dismissable"><button type="button" class="close"';
                alertBox += ' datdismiss="alert" arihidden="true">&times;</button>';
                alertBox += messageText + '</div>';
                
                $('#contact-form').find('.messages').html(alertBox);
                $('#contact-form')[0].reset();
            },
            error: function () {
                var messageAlert = 'alert-error';
                var messageText = 'Aww :( we are sorry. Please retry. Thanks!';

                var alertBox = '<div class="alert ' + messageAlert;
                alertBox += ' alert-dismissable"><button type="button" class="close"';
                alertBox += ' datdismiss="alert" arihidden="true">&times;</button>';
                alertBox += messageText + '</div>';
                
                $('#contact-form').find('.messages').html(alertBox);
            }
        });
        return false;
    });

    $('#subscribe-form').validator();
    $('#subscribe-form').on('submit', function (e) {
        e.preventDefault();

        $.ajax({
            type: "POST",
            url: "/subscribe",
            data: $(this).serialize(),
            success: function (data) {

            }
        });
        $('#subscribe-form')[0].reset();
        return false;
    });

});