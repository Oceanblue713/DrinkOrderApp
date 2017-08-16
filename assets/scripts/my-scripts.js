/*global $*/

$(function() {
  $("#show-menu-btn").click(function() {
    $("#menu").show();
  });
  
  $("#hide-menu-btn").click(function() {
    $("#menu").hide();
  });
  
  $('input[type="checkbox"]').click(function() {
    $(this).parent().toggleClass("highlight");
  });
  
  $('.bxslider').bxSlider({
    mode: 'vertical',
    captions: true,
  });
});
