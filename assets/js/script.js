$(document).ready(initializeApp)

var firstCardClicked = null;
var secondCardClicked = null;
var matches = null;
var match1 = null;
var match2 = null;
var flipVar = null;
var secondflipVar = null;

function initializeApp(){
$(".flip-card").on("click", flipCard);

}

function flipCard(event){
$(event.currentTarget).find(".flip-card-inner").toggleClass("flipped");
// flipping.toggleClass('.flip-card-inner');
  //$(event.currentTarget).find(".flip-card-inner").removeClass("flipped");



  if(firstCardClicked === null){
    firstCardClicked = $(event.currentTarget).find(".flip-card-back");
    console.log('first clicked');
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

      matches++;

      firstCardClicked = null;
      secondCardClicked = null;

      match1 = null;
      match2 = null;

    } else if (match1 === null || match2 === null) {


      console.log("no");



    } else if (match1 !== match2) {
      console.log('hello');
      setTimeout(function () {
        $(flipVar).toggleClass("flipped");
        $(secondflipVar).toggleClass("flipped");

      }, 1000);



      firstCardClicked = null;
      secondCardClicked = null;

      match1 = null;
      match2 = null;

    }





  }



  }


//setTimeout(function () { $(event.currentTarget).find(".flip-card-inner").toggleClass("flipped"); }, 3000);
