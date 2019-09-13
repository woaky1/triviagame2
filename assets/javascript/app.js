let timeLeft;
let intervalId;
let time = 120;
var radioValue;
var graded = false;
var userAnswers = [];
var numAnsweredCorrect = 0;
var numAnsweredIncorrect = 0;
var unansweredQuestions = 0;
var numberOfQuestions = 10;
var questionData = [
        question1 = {
            question:"What school of magic does the spell Burning Hands belong to?",
            option1:["Necromancy","incorrect"],
            option2:["Evocation","correct"],
            option3:["Conjuration","incorrect"],
            option4:["Enchantment","incorrect"]
        }
]
var QuestionIndex = 0;

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
function displayQuestion(i) {
    $("#questionText").html(questionData[i].question);
    $("#option1").html(questionData[i].option1[0]);
    $("#option1").attr("val", questionData[i].option1[1]);
    $("#option2").html(questionData[i].option2[0]);
    $("#option2").attr("val", questionData[i].option2[1]);
    $("#option3").html(questionData[i].option3[0]);
    $("#option3").attr("val", questionData[i].option3[1]);
    $("#option4").html(questionData[i].option4[0]);
    $("#option4").attr("val", questionData[i].option4[1]);

    console.log(questionData[i].option1[0]);
    i++;
}
displayQuestion(QuestionIndex);

// $("#option1"||"#option2"||"#option3"||"#option4").on("click", )
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