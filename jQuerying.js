$(document).ready(function(){

//1)
$("#hover").mouseenter(function() {
  $(this).css("background-color", "red");
});

$("#hover").click(function() {
  $(this).toggleClass("green");
});

//2)
$(".hideMe").click(function() {
  $(this).remove();
});

//3)
 $(".changeColor").click(function() {
   $("li:nth-child(3)").css("color", "blue");
 });
//4)
 $("#removeLi").click(function() {
   $(".only").remove();
 });
//5:  keeps appending)
$("ul li:nth-child(4)").click(function(){
  $(this).append("<li>Another Item</li>");
});

//6)
$("ul li").click(function(){
 $("li").last().css("font-size","40px");
 $("li:lt(4)").hide("slow");
});

//7)

  $(".cute").click(function() {
   $(".cute").clone().appendTo(".clones");
  });

//8
$("*").dblclick(function(){
  $("#makeSquare").css({"width":"300px", "height":"300px", "border-radius": "0px"});
});

//9
$("#dontClick").click(function() {
alert("Why you clickin that button?");
});


//10
$(".swatch.black").click(function() {
  $("body").addClass("black").removeClass("wood","chaos");
});
$(".swatch.wood").click(function() {
  $("body").addClass("wood").removeClass("black","chaos");
});
$(".swatch.chaos").click(function() {
  $("body").addClass("chaos").removeClass("wood","black");
});

});
