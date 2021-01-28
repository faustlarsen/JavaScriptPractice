$(document).ready(function() {
  $(".suboption").click( function() {
    if($(this).attr("href") == undefined) {
      $(".sub.current").removeClass("current");
      $(".sub." + $(this).attr("next")).addClass("current");
    } else {
      location.href = $(this).attr("href");
    }
  });
  $(".amenu").click( function() {
    if($(".sub").hasClass("current")) {
      $(".sub").removeClass("current");
    } else {
      $(".sub.main").addClass("current");
    }
  });
  $(".asearch").click( function() {
    $(".sub").removeClass("current");
    $(".subsearch").addClass("current");
  });
});
