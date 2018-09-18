$(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $(".content").fitVids();
  });


  if ($(window).width() < 768) {
    $(".content").removeClass('is-large');
    $('.content').addClass('is-medium');
  };





//   $(window).on('resize', function(event) {
//     if ($(window).width() < 768) {
//         $(".content").removeClass('is-large');
//     $('.content').addClass('is-medium');

//     }
// });

// $(window).on('resize', function(event) {
//     if ($(window).width() < 768) {
//         $(".content").removeClass('is-medium');
//     $('.content').addClass('is-large');

//     }
// });

