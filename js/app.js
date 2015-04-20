
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	newGame();
  	$(document).on('click' , 'a.new' , newGame);
  	
});

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

	//choose a number
	var actualNum = pickRandomNumber();
	console.log(actualNum);

	//user puts in something, assign to var
	var guess;
	$("guessButton").click(function(){
		guess = +$("userGuess").val();
	});

	//check to see how close, givefeedback
	//repeat while guess is != number
	//when they win, givefeedback winner
};


