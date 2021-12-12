$(document).ready(function () {

  //ADD SHADOW TO MAIN TWEET
  $(".tweet").on("mouseenter", function (event) {
    $(this).addClass("shadow");
  });

  $(".tweet").on("mouseleave", function (event) {
    $(this).removeClass("shadow");
  });

  //ADD HIGHLIGHT TO ICONS
  $(".fas").on("mouseenter", function (event) {
    $(this).addClass("highlight");
  });

  $(".fas").on("mouseleave", function (event) {
    $(this).removeClass("highlight");
  });
});


