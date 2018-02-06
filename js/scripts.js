$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
    alert("I told you, THIS IS A HEADER!");
  });

  //$("p").click(function() {
    //alert("This is a paragraph.");
  //});

  $("img").click(function() {
    alert("This is an image.");
  });
});

$(function() {
  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });
});

$(function() {
  $(".clickable").click(function() {
    $("#fade-in").slideToggle("slow", "linear");
    $("#fade-out").slideToggle("fast", "linear");
  });
});
