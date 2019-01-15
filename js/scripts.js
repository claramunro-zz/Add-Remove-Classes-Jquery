$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
    $("p").addClass("white-text");

  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("p").removeClass("white-text");
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("p").removeClass("white-text");
    $("body").addClass("red-background");
  });
});

// Change CSS element with jQuery

// $("button#green").click(function() {
//   $("body").css("background-color", "green");
// });
