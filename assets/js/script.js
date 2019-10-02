$(document).ready(initializeApp)

function initializeApp(){
$(".flip-card").on("click", flipCard);

}

function flipCard(event){
console.log(event)

$(event.currentTarget).find(".flip-card-inner").toggleClass("flipped");
// flipping.toggleClass('.flip-card-inner');
  //$(event.currentTarget).find(".flip-card-inner").removeClass("flipped");


}
