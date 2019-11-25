
var questions = [ 
    { question: "What is 2 + 2?",
      answers: { A: "4", B:"6",C:"8",D:"I DON'T KNOW"},
      correctAnswer: "A"},
    { question : " Which  word best describes you?",
      answers: { A:"Horrible", B:"BAD", C:"MEAN",D:"AWESOME"},
      correctAsnwer: "D"},
    { question: "How much money do you want to have?",
      answers: { A: "One Million", B:"One Thousand", C:"Ten Dollars",D:"One Dollar"},
      correctAnswer: "A"}];


var startGame =$("#button").on('click',function(){
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();
}); 

var questionDIisplay = function () {


}

var start = function () {


}
