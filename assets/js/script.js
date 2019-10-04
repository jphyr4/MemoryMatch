$(document).ready(initializeApp)

var firstCardClicked = null;
var secondCardClicked = null;

var matches = null;

var match1 = null;
var match2 = null;

var flipVar = null;
var secondflipVar = null;

var maxMatches = 2;

var attempts = 0;
var gamesPlayed = 0;

var accuracy = 0;



function initializeApp(){
$(".flip-card").on("click", flipCard);

}

function calculateAccuracy(){
accuracy = (matches/attempts)*100;
accuracy.toFixed(2);
  return accuracy;

}

function displayStats(){
var showAccuracy = calculateAccuracy();

  if (isNaN(accuracy)) {
    accuracy = 0;
  }

  $(".val1").text(gamesPlayed);

  $(".val2").text(attempts);

  $(".val3").text(accuracy.toFixed(0) + "%");




}

function flipBack(){
  $(".modal").css("display", "");
  $(".flip-card-inner").removeClass("flipped");

}

function resetStats(){
matches = 0;
attempts = 0;
accuracy = 0;

displayStats();


}

function flipCard(event){
$(event.currentTarget).find(".flip-card-inner").toggleClass("flipped");
// flipping.toggleClass('.flip-card-inner');
  //$(event.currentTarget).find(".flip-card-inner").removeClass("flipped");



  if(firstCardClicked === null){
    firstCardClicked = $(event.currentTarget).find(".flip-card-back");

    console.log(firstCardClicked.css("background-image"));

    match1 = firstCardClicked.css("background-image");

    flipVar = $(event.currentTarget).find(".flip-card-inner");

  } else {

    secondCardClicked = $(event.currentTarget).find(".flip-card-back");
    console.log(secondCardClicked.css("background-image"));

     match2 = secondCardClicked.css("background-image");

     secondflipVar = $(event.currentTarget).find(".flip-card-inner");


    if (match1 === match2) {
      console.log("this matches");
      attempts++;
      matches++;

      displayStats();


      if(matches === maxMatches){
        console.log("you win");

          gamesPlayed++;

          resetStats();

    $(".modal").css("display", "block");




      }

      firstCardClicked = null;
      secondCardClicked = null;

      match1 = null;
      match2 = null;

    } else if (match1 === null || match2 === null) {






    } else if (match1 !== match2) {

      setTimeout(function () {
        $(flipVar).toggleClass("flipped");
        $(secondflipVar).toggleClass("flipped");

      }, 1000);

      attempts++;
      displayStats();

      firstCardClicked = null;
      secondCardClicked = null;

      match1 = null;
      match2 = null;

    }





  }

console.log(attempts);
console.log(gamesPlayed);
  }


//setTimeout(function () { $(event.currentTarget).find(".flip-card-inner").toggleClass("flipped"); }, 3000);
