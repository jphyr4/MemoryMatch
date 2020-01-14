$(document).ready(initializeApp)

var firstCardClicked = null;
var secondCardClicked = null;

var matches = null;

var match1 = null;
var match2 = null;

var flipVar = null;
var secondflipVar = null;

var maxMatches = 9;

var attempts = 0;
var gamesPlayed = 0;

var accuracy = 0;

var dontFlip1 = null;
var dontFlip2 = null;



function initializeApp(){

$(".flip-card").on("click", flipCard);

}

function calculateAccuracy(){
accuracy = (matches/attempts)*100;
accuracy.toFixed(2);
  return accuracy;
  console.log(accuracy);

}

function displayStats(){
var showAccuracy = calculateAccuracy();

  if (isNaN(accuracy)) {
    accuracy = 0;
  }

  $(".val1").text(gamesPlayed);

  $(".val2").text(attempts);

  $(".val3").text(accuracy.toFixed(0) + "%");

console


}

function flipBack(){
  $(".modal").css("display", "");
  $(".flip-card-inner").removeClass("flipped");
  $(".flip-card").css("pointer-events", "");


}

function resetStats(){
matches = 0;
attempts = 0;
accuracy = 0;

displayStats();


}

function flipCard(event){

    $(event.currentTarget).find(".flip-card-inner").toggleClass("flipped");




    if (firstCardClicked === null && secondCardClicked === null) {

      dontFlip1 = $(event.currentTarget);

      firstCardClicked = $(event.currentTarget).find(".flip-card-back");

      console.log(firstCardClicked.css("background-image"));

      match1 = firstCardClicked.css("background-image");

      flipVar = $(event.currentTarget).find(".flip-card-inner");

      dontFlip1.css("pointer-events", "none");

    } else {

      dontFlip2 = $(event.currentTarget);

      secondCardClicked = $(event.currentTarget).find(".flip-card-back");
      console.log(secondCardClicked.css("background-image"));

      match2 = secondCardClicked.css("background-image");

      secondflipVar = $(event.currentTarget).find(".flip-card-inner");

      dontFlip2.css("pointer-events", "none");

      if (match1 === match2) {
        console.log("this matches");
        attempts++;
        matches++;

        displayStats();

        dontFlip1 = null;
        dontFlip2 = null;

        if (matches === maxMatches) {
          console.log("you win");

          gamesPlayed++;

          resetStats();

          $(".modal").css("display", "flex");




        }

        firstCardClicked = null;
        secondCardClicked = null;

        match1 = null;
        match2 = null;

      } else if (match1 === null || match2 === null) {

      } else if (match1 !== match2) {


        $(".flip-card").addClass("disabled");

        dontFlip1.css("pointer-events", "");
        dontFlip2.css("pointer-events", "");

        setTimeout(function () {
          $(flipVar).toggleClass("flipped");
          $(secondflipVar).toggleClass("flipped");
          //$(".flip-card").prop("disabled", false);
          $(".flip-card").removeClass("disabled");
        }, 1000);

        attempts++;
        displayStats();

        firstCardClicked = null;
        secondCardClicked = null;

        match1 = null;
        match2 = null;

      }





    }
}



console.log(attempts);
console.log(gamesPlayed);



//setTimeout(function () { $(event.currentTarget).find(".flip-card-inner").toggleClass("flipped"); }, 3000);
