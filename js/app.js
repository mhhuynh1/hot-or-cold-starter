
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
		console.log(guess);
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



/* 

Issues for giveFeedback:
-If within range for "ice cold," says ice cold [CORRECT]
-If within range for "cold," says cold [CORRECT]
-If it is a match, responds correctly as well. 
-HOWEVER, if within range for warm, hot, and very hot, also says "cold."
-How to fix?

*/

function giveFeedback () {
	if (guess != actualNum) {
		if (actualNum-50 >= guess || guess >= actualNum+50) {
			$("#feedback").text('Ice cold!'); //works
		}
		else if (actualNum-50 < guess <= actualNum-30 || actualNum+30 <= guess < actualNum+50) {
			$("#feedback").text('Cold!'); //not responding correctly; defaults to "Cold" for everything
			console.log("Cold");
		}
		else if (actualNum-30 < guess <= actualNum-20 || actualNum+20 <= guess < actualNum+30) {
			$("#feedback").text('Warm!'); //not responding correctly; defaults to "Cold" for everything
			console.log("warm");
		}
		else if (actualNum-20 < guess <= actualNum-10 || actualNum+10 <= guess < actualNum+20) {
			$("#feedback").text('Hot!'); //not responding correctly; defaults to "Cold" for everything
			console.log("hot");
		}
		else if (actualNum-10 < guess <= actualNum-1 || actualNum+1 <= guess < actualNum+10) {
			$("#feedback").text('Very hot!');
			console.log("very hot");
		}
	}
	else {
		$("#feedback").text('You got it! The number is ' + actualNum + '.'); //works
	};
}; //end givefeedback


