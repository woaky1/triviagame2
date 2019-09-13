let timeLeft;
let intervalId;
let time = 120;
var radioValue;
var graded = false;
var userAnswers = [];
var correctAnswers = []
var numAnsweredCorrect = 0;
var numAnsweredIncorrect = 0;
var unansweredQuestions = 0;
var numberOfQuestions = 10;

$(document).ready(function(){
    $("#start").on("click", function(){
        // console.log("I was clicked.");
        $("#startScreen").addClass("disappear");
        $("#quiz").removeClass("disappear");
        clock();
    });
});

function clock() {
    intervalId = setInterval(decrement, 1000);

}

function decrement() {
    if (time > 0) {
        time--;
        $("#onscreenTimer").html(time);
    } else {
        grade();
    }
}

function grade() {
// Learned how to loop through and grab the checked button values from one of the answers here: https://stackoverflow.com/questions/45848618/how-to-check-the-values-of-multiple-dynamic-radio-buttons-in-a-form-using-jquery
    
    if (graded === false) {
        $('input[type=radio]:checked').each(function() {
            userAnswers.push(this.value);
        });
        for(var i = 0; i < numberOfQuestions; i++) {
            if (userAnswers[i] === "correct") {
                numAnsweredCorrect++;
            } else if (userAnswers[i] === "incorrect") {
                numAnsweredIncorrect++;
            }
        }
        unansweredQuestions = numberOfQuestions - userAnswers.length;
        $("#correct_num").html(numAnsweredCorrect);
        $("#incorrect_num").html(numAnsweredIncorrect);
        $("#unanswered_num").html(unansweredQuestions);
        $("#quiz").addClass("disappear");
        $("#endScreen").removeClass("disappear");
    };
    graded = true;
}

$("#gradeMe").on("click", function(){
    time = 0;
    grade();
})