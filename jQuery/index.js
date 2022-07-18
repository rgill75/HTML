// $("h1").css("color", "red");  // $ = jQuery
// document.querySelector("h1") equivalent
// $("h1").text("Yes!");
//
// $("button").html("<em>Bye!</em>"); // Any operation here changes ALL buttons!

// console.log($("h1").css("font-size"));

// $("a").attr("href", "https://www.yahoo.com");
//
// $("h1").css("color", "purple");

// $("button").click(function() {
//   $("h1").css("color", "purple");
// });
//
// $("input").keydown(function(event) {
//   $("h1").text(event.key);
// })

// $("h1").on("mouseover", function() {
//   $("h1").css("color", "purple");
// });

$("button").on("click", function() {
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
