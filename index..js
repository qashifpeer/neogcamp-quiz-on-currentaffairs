var readlineSync = require("readline-sync");

score = 0;
function welcome()
{
  var userName = readlineSync.question("Hi, Please enter your name: ");
  console.log("Welcome " + userName);
  console.log("You will be asked questions on Current Affairs");
  console.log("Please enter the corresponding number , like (1 or 2 or 3 ..")
}

// Array of questions
var questions = [
  {question: "Drupadi Marmu Is India's \n 1. prime minister \n 2. president: ",
  answer:"2"},
  {question: "Neeraj Chopra Plays \n 1. cricket \n 2.  athlete: ",
  answer:"2"},
  {question: "Capital of Punjab is : \n 1. chandigarh \n 2.  Patiala: ",
  answer:"1"},
  {question: "Joe Biden is : \n 1. politician \n 2.  doctor: ",
  answer:"1"},
  {question: "Which country won Asia Cup 2022 \n 1. India \n 2.  Srilanka: ",
  answer:"2"},
  
]

function play(question,answer)
  {
    console.log(" \n")
    var userAnswer = readlineSync.question(question)
    
    if (userAnswer ===answer)
    {
            console.log("Correct Answer")
      score = score+1;
      console.log("=====================")
    }
    else{
  console.log("Wrong Answer")
       console.log("=====================")
}

  }

function game(){
for(var i=0; i<questions.length; i++){
var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

}

function finalScore(){
  console.log("Final Score is " + score)
}

welcome();
game();
finalScore();