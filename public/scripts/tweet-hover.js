$(document).ready(function () {
  $(".tweet").on("mouseenter", function (event) {
    $(this).addClass("shadow");
  });

  $(".tweet").on("mouseleave", function (event) {
    $(this).removeClass("shadow");
  });

  $(".fas").on("mouseenter", function (event) {
    $(this).addClass("highlight");
  });

  $(".fas").on("mouseleave", function (event) {
    $(this).removeClass("highlight");
  });
});


