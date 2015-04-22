
var guess;
var actualNum;
var counter = 0;

$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	//Every Time NEW is Clicked, new game.
  	$("nav > ul.clearfix").on('click' , 'a.new' , newGame);

  	//When Doc is ready, newgame.
	newGame();

}); //end document ready

function newGame () {
	//clear out fields
	counter = 0;
	$("#userGuess").val('');
	$("#guessList").empty(); 
	$("span#count").text(counter);
	$("#feedback").text('Make your Guess!');

	//generate new number for game
	actualNum = pickRandomNumber();
  	console.log("The mystery number is " + actualNum);

  	//every time guess button is clicked
  	$("#guessButton").click(function(event){
  		event.preventDefault();
		guess = +$("#userGuess").val();
		console.log("The guess number is " + guess);
		giveFeedback();
		updateGuesses();
	});
}; //end newgame

function updateGuesses () {
	$("#guessList").append(
		'<li>' + guess + '</i>'
	);
	counter++;
	$("span#count").text(counter);
}; //end updateguesses

function pickRandomNumber () {
	return Math.floor((Math.random() * 100) + 1);
};

function giveFeedback () {
	var difference = Math.abs(guess - actualNum);
	console.log("The absolute difference is " + difference);

	if (difference >= 50) {
		$("#feedback").text('Ice cold!'); //works
	};
	if (30 <= difference && difference < 50) {
		$("#feedback").text('Cold!'); //not responding correctly; defaults to "Cold" for everything
		console.log("Cold");
	};
	if (20 <= difference && difference < 30) {
		$("#feedback").text('Warm!'); //not responding correctly; defaults to "Cold" for everything
		console.log("warm");
	};
	if (10 <= difference && difference < 20) {
		$("#feedback").text('Hot!'); //not responding correctly; defaults to "Cold" for everything
		console.log("hot");
	};
	if (1 <= difference && difference < 10) {
		$("#feedback").text('Very hot!');
		console.log("very hot");
	};
	if (difference == 0) {
		$("#feedback").text('You got it! The number is ' + actualNum + '.'); //works
	};

}; //end givefeedback


