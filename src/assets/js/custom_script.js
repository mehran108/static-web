//custom js
$(document).ready(function () {
  $("#open-side").click(function (e) {
    e.stopPropagation();
    $(".wrapper").fadeIn("slow");
    $(".wrapper").addClass("active");
    $(".menu-btn").addClass("menu-active");
    $('.overlay').addClass('active');
    $(".menu-btn").removeClass("menu-inactive");
  });
  $("#open-side1").click(function (e) {
    e.stopPropagation();
    $(".wrapper").fadeIn("slow");
    $(".wrapper").addClass("active");
    $('.overlay').addClass('active');
  });
  $("#close-side").click(function () {
    $(".wrapper").fadeOut("slow");
    $(".wrapper").removeClass("active");
    $(".menu-btn").removeClass("menu-active");
    $(".menu-btn").addClass("menu-inactive");
    $('.overlay').removeClass('active');
  });


  //AOS animation
  //AOS.init();
  //AOS animation

  $('.single-item').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
  });

  $('#slick1').slick({
    rows: 2,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });



});

//header-overlay
$(document).click(function () {
  if (($(".wrapper").hasClass("active")) && ($(".overlay").hasClass("active"))) {
    $(".wrapper").fadeOut("slow");
    $('.overlay').removeClass('active');
  }
});



//window load
$(window).load(function () {

  $('.counter').countUp({
    'time': 2000,
    'delay': 10
  });

  //mapbox js
  mapboxgl.accessToken = 'pk.eyJ1IjoibXVoYW1tYWQta2hpemFyIiwiYSI6ImNrNGw2cTR0cTF4N28zZXF3cW1lYnEzdTYifQ.7ZTNdPtctprKL33po_OAjQ';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
  });
  //mapbox js
}); //window load
