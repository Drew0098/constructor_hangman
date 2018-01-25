var array = require("./array.js");
var letter = require("./letter.js");
exports.letterArray = [];
exports.chosenWord = array.chosenWord;

exports.checker = function(){
	exports.letterArray.push(array.letter);
	var detected = 0; 
	for (var i = 0; i < chosenWord.length; i++) {
		if (chosenWord.charAt(i) == array.letter){
			letter.editArray(i, array.letter);
			detected++;
		}
	}
	letter.displayWord();
	if (detected == 0) {
		array.lives++; 
	}
	app.requestInfo();

}; 

exports.wordCheck = function(){
	var guess = array.wordGuess;
	var word = array.chosenWord;
	var isNotEqual; 
	for (var k = 0; k < word.length; k++) {
		if (guess[k] != word[k]) {
			isNotEqual = false; 
		} else {
			isNotEqual = true; 
		}
	};

	if (isNotEqual) {
		console.log("Great job!");
		array.playAgain();
	} else {
		console.log("Sorry, that is incorrect. Better luck next time.");
		array.lives++;
		array.requestInfo();
	}
};