
var guess;
var actualNum;

$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$("nav > ul.clearfix").on('click' , 'a.new' , newGame);
  	newGame();
  	actualNum = pickRandomNumber();
  	console.log(actualNum);
  	$("#guessButton").click(function(){
		guess = +$("#userGuess").val();
		console.log(guess);
	});
	//first click prints to console the guess properly
	//second click refreshes the page

}); //end document ready

function pickRandomNumber () {
	return Math.floor((Math.random() * 100) + 1);
};

function giveFeedback () {

};

function newGame () {
	//clear out fields
	var counter = 0;
	$("#userGuess").val('');
	$("#guessList").empty(); 
	$("span#count").text(counter);



	//sometimes this works, sometimes clicking guessbutton
	//makes the page refresh. why?


	//check to see how close, givefeedback
	//repeat while guess is != number
	//when they win, givefeedback winner
};


