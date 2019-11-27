
var panel = $("#quiz-area");
// Question set
var questions = [{
  question: "What is 2+2 ?",
  answers: ["2", "3", "4", "5"],
  correctAnswer: "4"
}, {
  question: "Which word best describes your?",
  answers: ["Awesome", "Mean", "Horrible", "Unfriendly"],
  correctAnswer: "Awesome"
}, {
  question: "Name the largest continent of the World",
  answers: ["Asian", "Africa", "Americia", "Europe"],
  correctAnswer: "Asia"
}, {
  question: "How many states are in the USA?",
  answers: ["50", "51", "45", "49"],
  correctAnswer: "50"
}, {
  question: "Which state is known as Empire State?",
  answers: ["Georgia", "California", "Washington D.C", "New York"],
  correctAnswer: "New York"
}];


var timer;
var game = { correct : 0,
             incorrect: 0,
            counter: 120,
        countdown: function(){
            $("#counter-number").html(game.counter);
            if (game.counter === 0) {
              console.log("TIME UP");
              game.done();  
        }
    },

    start: function() {
        timer = setInterval(game.countdown, 1000);
        $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");
        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {
          panel.append("<h2>" + questions[i].question + "</h2>");
          for (var j = 0; j < questions[i].answers.length; j++) {
            panel.append("<input type='radio' name='question-" + i +
            "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
          }
        }
        panel.append("<button id='done'>Done</button>");
      },
      done: function() {
        $.each($("input[name='question-0']:checked"), function() {
          if ($(this).val() === questions[0].correctAnswer) {
            game.correct++;
          }
          else {
            game.incorrect++;
          }
        });
        $.each($("input[name='question-1']:checked"), function() {
          if ($(this).val() === questions[1].correctAnswer) {
            game.correct++;
          }
          else {
            game.incorrect++;
          }
        });
        $.each($("input[name='question-2']:checked"), function() {
          if ($(this).val() === questions[2].correctAnswer) {
            game.correct++;
          }
          else {
            game.incorrect++;
          }
        });
        $.each($("input[name='question-3']:checked"), function() {
          if ($(this).val() === questions[3].correctAnswer) {
            game.correct++;
          }
          else {
            game.incorrect++;
          }
        });
        $.each($("input[name='question-4']:checked"), function() {
          if ($(this).val() === questions[4].correctAnswer) {
            game.correct++;
          }
          else {
            game.incorrect++;
          }
        });
        $.each($("input[name='question-5']:checked"), function() {
          if ($(this).val() === questions[5].correctAnswer) {
            game.correct++;
          }
          else {
            game.incorrect++;
          }
        });
        this.result();
      },
      result: function() {
        clearInterval(timer);
        $("#sub-wrapper h2").remove();
        panel.html("<h2>All Done!</h2>");
        panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
        panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
      }
    };
    // CLICK EVENTS
    $(document).on("click", "#start", function() {
      game.start();
    });
    $(document).on("click", "#done", function() {
      game.done();
    });