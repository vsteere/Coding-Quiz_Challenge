//starting array listing the questions, possible answers and correct answers

var quizQuestions = [
    {
    q: "Which company was not creating cars in the 1960s?",
    a: ["Ford", "GM", "MOPAR", "Tesla"],
    c: "Tesla" 
    },

    {
    q: "What does GTO stand for on Pontiac's muscle car name?",
    a: ["Grand Tourismo Obligato", "Gonna Try Over", "Grind Toward Oblivion", "Gator Tour Ovation"],
    c: "Grand Tourismo Obligato"

},

    {
        q: "What brand was not included under the MOPAR umbrella?",
        a: ["Dodge", "Chrysler", "Fiat", "Plymouth"],
        c: "Fiat"
    },

    {
        q: "what CID was the 6.2L Hemi motor produced by Dodge?",
        a: ["426", "440", "454", "328"],
        c: "426"
   },

   { 
        q: "What body style was the 1966/67 Doge Charger?",
        a: ["b body", "a body", "c body", "x body"],
        c: "b body"


   },

   {
    q: "Ford Mustang came out in what year?",
    a: ["1964 1/2", "1965", "1967", "1970"],
    c: "1964 1/2"
   }
];



//60 seconds timer that starts once the start button is clicked
var timerPlace = document.querySelector("#timer");
var timeRemaining = 60;

document.querySelector("#start").addEventListener("click", timer);

function timer() {
    var timerInterval = setInterval(function() {
        timeRemaining--;
        timerPlace.textContent = timeRemaining + " seconds remaining in the quiz";

        if(timeRemaining === 0) {
            clearInterval(timerInterval);

        }


    }, 1000);
      
}

