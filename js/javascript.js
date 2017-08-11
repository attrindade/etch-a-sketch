var squareDiv = "<div class=\"square\"></div>";
var holderDiv = "<div class=\"holder\"></div>";

$(document).ready(function(){

	createGrid(3);


	mOverColored("black");

});

function promptSize (){
	var sizeRequested = prompt("Please enter the size of the new grid", "e.g. 16");

	$(".square").remove();
	$(".holder").remove();

	createGrid(sizeRequested);
};

function createGrid (size){
	for (var i = 0; i < size; i++) {
		$("#container").append("<div style=\"height:" + 100/size + "%\" class=\"holder\"></div>");

	}

	for (var i = 0; i < size; i++) {
		$(".holder").append("<div style=\"width:" + 100/size +"%\" class=\"square\"></div>");
	}
}

function mOverColored (color) {
	if (color != "random") {
		$(document).on("mouseover",".square", function(){
			$(this).css("background-color", color);
		})		
	} else {
		$(document).on("mouseover",".square", function(){
			$(this).css("background-color", getRandomColor);
		});	
	}
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}