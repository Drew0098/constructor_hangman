var array = require('./array.js');
exports.guessArray = [];
var guessDisplay = "";
exports.wordArray = [];


exports.initDisplay = function(){
	var wordChoice = array.newWord;
	for (var i = 0; i < wordChoice.length; i++) {
		exports.wordArray.push(wordChoice.charAt(i));
		if (wordChoice.charAt(i) == '\xa0') {
			exports.guessArray.push('\xa0');		
		} else {
		exports.guessArray.push('_');
		}
	};
};


exports.displayWord = function() {
	guessDisplay = "";
	for (var i = 0; i < exports.guessArray.length; i++) {
		guessDisplay += exports.guessArray[i]+" ";
	}
	console.log(guessDisplay);
};


exports.editArray = function(position, letter){
	exports.guessArray[position] = letter; 
};