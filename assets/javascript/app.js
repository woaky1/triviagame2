let timeLeft;
let intervalId;
let time = 120;
var numAnsweredCorrect = 0;
var numAnsweredIncorrect = 0;
var unansweredQuestions = 0;
var questionData = [
    question1 = {
        question:"What school of magic does the spell <span class='red'>Burning Hands</span> belong to?",
        option1:["Necromancy","incorrect"],
        option2:["Evocation","correct"],
        option3:["Conjuration","incorrect"],
        option4:["Enchantment","incorrect"]
    },
    question2 = {
        question:"Which of these spells can a ranger <span class='red'>not</span> cast?",
        option1:["Wind Wall","incorrect"],
        option2:["Silence","incorrect"],
        option3:["Meld Into Stone","correct"],
        option4:["Nondetection","incorrect"]
    },
    question3 = {
        question:"What is the duration for the spell <span class='red'>Haste</span>?",
        option1:["1 round","incorrect"],
        option2:["1 hour","incorrect"],
        option3:["Until your next rest","incorrect"],
        option4:["1 minute","correct"]
    },
    question4 = {
        question:"Which of these spell components can <span class='red'>not</span> be used to cast <span class='red'>Sleep</span>?",
        option1:["a Feather","correct"],
        option2:["a Pinch of Sand","incorrect"],
        option3:["Rose Petals","incorrect"],
        option4:["a Cricket","incorrect"]
    },
    question5 = {
        question:"Which cleric domain can cast <span class='red'>Pass Without A Trace</span>?",
        option1:["Nature","incorrect"],
        option2:["Light","incorrect"],
        option3:["Trickery","correct"],
        option4:["War","incorrect"]
    },
    question6 = {
        question:"Wizards who specialize in <span class='red'>Abjuration</span> magic are called?",
        option1:["Abjustices","incorrect"],
        option2:["Abjurators","incorrect"],
        option3:["Abjurists","incorrect"],
        option4:["Abjurers","correct"]
    },
    question7 = {
        question:"What's the highest spell level an <span class='red'>Eldritch Knight</span> can cast?",
        option1:["Third","incorrect"],
        option2:["Fourth","correct"],
        option3:["Fifth","incorrect"],
        option4:["Sixth","incorrect"]
    },
    question8 = {
        question:"What is the source of <span class='red'>Sorcerers'</span> magic?",
        option1:["Another dimension","incorrect"],
        option2:["Themselves","correct"],
        option3:["The God of Magic","incorrect"],
        option4:["Crystals","incorrect"]
    },
    question9 = {
        question:"What is the spellcasting ability for a <span class='red'>Paladin</span>?",
        option1:["Intelligence","incorrect"],
        option2:["Wisdom","incorrect"],
        option3:["Mana","incorrect"],
        option4:["Charisma","correct"]
    },
    question10 = {
        question:"Which of these magic items <span class='red'>isn't</span> found in the <span class='red'>Dungeon Master's Guide</span>?",
        option1:["Deck of Many Things","incorrect"],
        option2:["Hat of Rabbits","correct"],
        option3:["Bag of Holding","incorrect"],
        option4:["Chime of Opening","incorrect"]
    }
]
var questionIndex = 0;

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
    questionIndex++;
}
displayQuestion(questionIndex);

$("#option1, #option2, #option3, #option4").on("click", function(){
    if ($(this).attr("val") === "correct") {
        numAnsweredCorrect++;
    } else {
        numAnsweredIncorrect++;
    }
    // console.log("Correct: " + numAnsweredCorrect + " Incorrect: " + numAnsweredIncorrect);
    if (questionIndex < questionData.length) {
        displayQuestion(questionIndex);
    } else {
        grade();
    }
    
});

function grade(){
    unansweredQuestions = questionData.length - (numAnsweredCorrect + numAnsweredIncorrect);
    $("#correct_num").html(numAnsweredCorrect);
    $("#incorrect_num").html(numAnsweredIncorrect);
    $("#unanswered_num").html(unansweredQuestions);
    $("#quiz").addClass("disappear");
    $("#endScreen").removeClass("disappear");
}