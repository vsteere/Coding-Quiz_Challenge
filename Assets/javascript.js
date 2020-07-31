//starting array listing the questions, possible answers and correct answers

var quizQuestions = [
    {
    q: "Which company was not creating cars in the 1960s?",
    a: [
        {text: "Ford", correct: false}, 
        {text: "GM", correct: false}, 
        {text:"MOPAR", correct: false}, 
        {text:"Tesla", correct: true}
    ]
     
    },

    {
    q: "What does GTO stand for in Pontiac's muscle car name?",
    a: [
        {text: "Grand Tourismo Obligato", correct: true}, 
        {text: "Gonna Try Over", correct: false},
        {text: "Grind Toward Oblivion", correct: false},
        {text: "Gator Tour Ovation", correct: false}
    ]   

},

    {
        q: "What brand was not included under the MOPAR umbrella?",
        a: [
            {text: "Dodge", correct: false},
            {text: "Chrysler", correct: false},
            {text: "Fiat", correct: true},
            {text: "Plymouth", correct: false}
        
        ]
        
    },

    {
        q: "what CID was the 6.2L Hemi motor produced by Dodge?",
        a: [
            {text: "426", correct: true},
            {text: "440", correct: false}, 
            {text: "454", correct: false}, 
            {text: "328", correct: false}
        ]
        
   },

   { 
        q: "What body style was the 1966/67 Doge Charger?",
        a: [
            {text: "b body", correct: true}, 
            {text: "a body", correct: false},
            {text: "c body", correct: false},
            {text: "x body", correct: false}
        ]
       
   },

   {
    q: "Ford Mustang came out in what year?",
    a: [
        {text: "1964 1/2",  correct: true},
        {text: "1965", correct: false},
        {text: "1967", correct: false},
        {text: "1970", correct: false}
    
    ],
    
   }
];



//90 seconds timer that starts once the start button is clicked
var timerPlace = document.querySelector("#timer");
var timeRemaining = 90;
//variables for the quiz

//variable for the button container
var bBox = document.querySelector("#buttonStorage");
//variable for the container that contains the question and the choices
var qBox = document.querySelector("#question");
//variable for the container where the questions will be shown
var quizBox = document.querySelector("#questionBox");
//variable for the container where the choices will be shown
var answerBox = document.querySelector("#choices");
document.querySelector("#start").addEventListener("click", timer);

function timer() {
    var timerInterval = setInterval(function() {
        timeRemaining--;
        timerPlace.textContent = timeRemaining + " seconds remaining in the quiz";

        if(timeRemaining === 0) {
            clearInterval(timerInterval);

        }


    }, 1000);

    bBox.classList.add("hide");
    qBox.classList.remove("hide");

    startQuestions()
    


};







var score = 0;

// for (var i=0; i <quizQuestions.length; i++){
//     var quizResponse=document.querySelector("#choices").textContent(quizQuestions[i].q)
//         if(response == quizQuestions[i].c){
//             score++;
//         }

//         else {
//             timeRemaining - 10;

//         }
// }


//function to show the first question
function startQuestions() {
    showQuestion(quizQuestions[0])
}




function showQuestion(q) {
    quizBox.innerText = q.q
    quizQuestions.a.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = a.text
        if (a.correct) {
            score++
        }




    })


}



//function to select which answer is correct
function selectAnswer() {


} 