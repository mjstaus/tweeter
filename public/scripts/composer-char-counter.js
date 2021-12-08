$(document).ready(function() {
  $("#tweet-text").on("input", function(event){
  
   let $counter = $(this).parentsUntil("form").siblings().find("output")

   $counter.val(140 - $(this).val().length)
    
   if($counter.val() < 0 && !$counter.hasClass("danger")){
     $counter.addClass("danger")
     console.log("danger")
   }
   if($counter.val() >= 0 && $counter.hasClass("danger")){
    $counter.removeClass("danger")
  }
    });
  });