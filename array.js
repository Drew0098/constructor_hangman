var words = ["calculus", "arithmetic", "variable", "pythagorean\xa0theorem", "radius", "right\xa0angle", "square\xa0root", "parabola", 
"linear\xa0equation", "integer", "improper\xa0fraction", "circumference", "expression", "factor\xa0tree ", "parallelogram", "trigonometry", 
"quadrilateral", "inverse\xa0function"];

var chosenWord = exports.newWord = function() {
	var randNum = Math.floor((Math.random()*words.length)+1);
	return words[randNum];
}