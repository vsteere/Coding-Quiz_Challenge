//starting array listing the questions, possible answers and correct answers

var quizContents = [
    {
    "question": "Which company was not creating cars in the 1960s?",
   
        "a" : "1. Ford",
        "b" : "2. GM",
        "c" : "3. MOPAR",
        "d" : "4. Tesla",
        "correct" : "4. Tesla",
       
    
     
    },

    {
    "question" : "What does GTO stand for in Pontiac's muscle car name?",
        "a" : "1. Grand Tourismo Obligato",
        "b" : "2. Gonna Try Over",
        "c" : "3. Grind Toward Oblivion",
        "d" : "4. Gator Tour OVation",
        "correct" : "1. Grand Tourismo Obligato",
   

},

    {
        "question": "What brand was not included under the MOPAR umbrella?",
        "a" : "1. Dodge",
        "b" : "2. Chrysler",
        "c" : "3. Fiat",
        "d" : "4. Plymouth",
        "correct" : "3. Fiat",
          
    },

    {
        "question" : "what CID was the 6.2L Hemi motor produced by Dodge?",
        "a" : "1. 426",
        "b" : "2. 440",
        "c" : "3. 454",
        "d" : "4. 328",
        "correct" : "1. 426",
             
   },

   { 
        "question": "What body style was the 1966/67 Doge Charger?",
        "a" : "1. b body",
        "b" : "2. a body",
        "c" : "3. c body",
        "d" : "4. x body",
        "correct" : "1. b body",
        
   },

   {
    "question" : "Ford Mustang came out in what year?",
    "a" : "1. 1964 1/2",
    "b" : "2. 1965",
    "c" : "3. 1967",
    "d" : "4. 1970",
    "correct" : "1. 1964 1/2",
       
   }
];



//timer box
var timerPlace = document.querySelector("#timer");
//number of seconds to start
var timeRemaining = 45;
//main quiz container
var mainBox = document.querySelector("#question");
//score box 
var score = document.querySelector("#score");
//answer box
var answerBox = document.querySelector("#respondance");
//question box
var qBox = document.querySelector("#questionBox");
//button box
var bBox = document.querySelector("#buttonStorage")
//choices
var choice1 = document.querySelector("#choice_1");
var choice2 = document.querySelector("#choice_2");
var choice3 = document.querySelector("#choice_3");
var choice4 = document.querySelector("#choice_4");
var correctChoice = document.querySelector("#choice_1");
//box where the final score will show
var fScore = document.querySelector("#final_Score");

//beginning score
var startingScore = 0;
//variable to cycle through question array
var questionIndex = 0;


//resets score when quiz restarts
function Reset(){
    startScore = 0;
    questionIndex = 0;

}
//90 seconds timer that starts once the start button is clicked
document.querySelector("#start").addEventListener("click", timer);




//timer function 
function timer() {
    var timerInterval = setInterval(function() {
        timeRemaining--;
        timerPlace.textContent = timeRemaining + " seconds remaining in the quiz";
        if(timeRemaining === 0 || quizContents.length === questionIndex) {
            clearInterval(timerInterval);
            finalScore();

        }
        

    }, 1000);

    bBox.classList.add("hide");
    mainBox.classList.remove("hide"); 


};

//function to run the questions and answer from the array
function appearQuestions() {
    var q = quizContents[questionIndex];

    qBox.innerHTML = q.question;
    choice1.innerHTML = q.a;
    choice1.setAttribute("data-answer", q.a);
    choice2.innerHTML = q.b;
    choice2.setAttribute("data-answer", q.b);
    choice3.innerHTML = q.c;
    choice3.setAttribute("data-answer", q.c);
    choice4.innerHTML = q.d;
    choice4.setAttribute("data-answer", q.d);

}

appearQuestions();
choice1.addEventListener("click", function (event) {
    checkAnswer(event);
})
choice2.addEventListener("click", function (event) {
    checkAnswer(event);
})
choice3.addEventListener("click", function (event) {
    checkAnswer(event);
})
choice4.addEventListener("click", function (event) {
    checkAnswer(event);
})


//checking if event is right
function checkAnswer(event) {
    event.preventDefault();

    var answer = event.currentTarget.dataset.answer;
    var rightAnswer = null;

    if (quizContents[questionIndex].correct === answer) {
        rightAnswer = answer; 

    }
    //messages that will appear if right/wrong
    if (answer === rightAnswer) {
        answerBox.textContent = "You are Correct!!";
    } 
//time deduction for wrong answer; if less than 10 seconds remains, set timer to 0

    else {
        answerBox.textContent = "Incorrect! Not Right! Not at All!";
        timeRemaining -= 10
            if (timeRemaining < 0) {
                timeRemaining = 0;
            }
            
    }
    if(quizContents.length === questionIndex+1){
        finalScore(); // this will show score if user went through all questionos
        return; //goes on to the next question if not all questions answered
    }
    questionIndex++;
    appearQuestions();
    
}
//displays final score in the appropriate box
function finalScore () {
    fScore.textContent = "The final score was " + timeRemaining;

};