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
    $("#fade-in").fadeToggle("slow", "linear");
    $("#fade-out").fadeToggle("fast", "linear");
  });
});

$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
  });
});

$(document).ready(function() {
  $("p").click(function() {
    $("p").removeClass("border-patrol");
    $("p").addClass("border-patrol");
  });
});
