var array = require('./array.js');
var inquirer = require('inquirer');
var word = require('./word.js');
var letter = require('./letter.js')
var choice;
exports.letter; 
exports.wordGuess;
exports.lives = 0; 
exports.chosenWord = array.newWord();

exports.requestInfo = function() {
	if (exports.lives >= 10) {
		console.log("You lose. Better luck next time.");
		exports.playAgain();
	} else {
		var questions = [
		{
			type: "list",
			name: "choice",
			message: "What would you like to guess?\n You have used "+exports.lives+" out of 10. Be careful.",
			choices:["letter", "word"]
		}
	]};

	inquirer.prompt(questions).then(function(answers) {
		if (answers.choice == "letter") {
			var letterQ = [
			{
				type: "input",
				name: "letter",
				message: "You have already chosen: "+word.letterArray+"\nCurrent Guess: "
			}
			];

			inquirer.prompt(letterQ).then(function(answers){
				exports.letter = answers.letter;
				word.checker();
			});
		} else if (answers.choice == "word") {
			var wordQ = [
				{
					type: "input",
					name: "word",
					message: "Which word do you think it is?"
				}
			];
			inquirer.prompt(wordQ).then(function(answers) {
				exports.wordGuess = answers.word;
				word.wordCheck();
			});
		} else {
			console.log("Wrong answer. Please try again.");
			exports.requestInfo();
		}
	});
	
};

exports.playAgain = function() {
	var questions = [
		{
			type: "list",
			name: "playAgain",
			message: "Would you like to play again?",
			choices:[
			"yes",
			"no"
			]
		}
	];

	inquirer.prompt(questions).then(function(answer){
		if (answer.playAgain == "yes") {
			exports.lives = 0; 
			exports.chosenWord = array.newWord();
			letter.guessArray = [];
			letter.wordArray = [];
			word.letterArray = [];
			letter.initDisplay();
			letter.displayWord();
			exports.requestInfo();
		}
		else {
			console.log("Thanks for playing!");
		}
	});
};

letter.initDisplay();
letter.displayWord();
exports.requestInfo();