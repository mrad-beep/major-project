// This JavaScript code is optional. It can be used to add smooth scrolling to the links in the navigation bar.
$(document).ready(function () {
    $('a').on('click', function (event) {
      event.preventDefault();
      var target = $(this.hash);
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 800);
    });
  });
  