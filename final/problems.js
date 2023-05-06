let questionsArray = [];
let answersArray = [];
let startingQuestionX = 60;
let startingQuestionY = 180;
let startingAnswerX = 720;
let startingAnswerY = 180;
const DOWN = "down";
const UP = "up";
const WAITING = "waiting";
const QUESTION = "question";
const CHECK = "check";
const SETUP = "setup"
let imageBack;
let state = {
  waiting: false,
  questionPhase: false,
  checkQuestionPhase: false,
  phase: SETUP,
  numMatches: 0,
  numPairs: 12,
  currentQuestion: null,
  currentAnswer: null
}
let twinkle;  //sound

let problems = [];
function preload() {
  twinkle = loadSound('twinkle.mp3');
  cardBack = loadImage("images/cardback.png")
  //array of problem objects
  console.log("preloading")
  problems = [
    {
      questionImage: loadImage("images/q-1.png"),
      answerImage: loadImage("images/1.png"),
      reference: 1
    },
        {
      questionImage: loadImage("images/q-2.png"),
      answerImage: loadImage("images/2.png"),
      reference: 2
    },
        {
      questionImage: loadImage("images/q-4.png"),
      answerImage: loadImage("images/4.png"),
      reference: 4
    },
    {
      questionImage: loadImage("images/q-5.png"),
      answerImage: loadImage("images/5.png"),
      reference: 5
    },
        {
      questionImage: loadImage("images/q-6.png"),
      answerImage: loadImage("images/6.png"),
      reference: 6
    },
        {
      questionImage: loadImage("images/q-7.png"),
      answerImage: loadImage("images/7.png"),
      reference: 7
    },
        {
      questionImage: loadImage("images/q-8.png"),
      answerImage: loadImage("images/8.png"),
      reference: 8
    },
        {
      questionImage: loadImage("images/q-9.png"),
      answerImage: loadImage("images/9.png"),
      reference: 9
    },
        {
      questionImage: loadImage("images/q-10.png"),
      answerImage: loadImage("images/10.png"),
      reference: 10
    },
        {
      questionImage: loadImage("images/q-11.png"),
      answerImage: loadImage("images/11.png"),
      reference: 11
    },
        {
      questionImage: loadImage("images/q-14.png"),
      answerImage: loadImage("images/14.png"),
      reference: 14
    },
        {
      questionImage: loadImage("images/q-15.png"),
      answerImage: loadImage("images/15.png"),
      reference: 15
    }
  ]
}
function setup() {
  console.log("setting up")
  createCanvas(1200, 1000);
  // make question and answer arrays
  for (let i = 0; i < problems.length; i++) {
    questionsArray.push(new QuestionCard( problems[i].questionImage, problems[i].reference)) 
    answersArray.push(new AnswerCard( problems[i].answerImage, problems[i].reference)) 
  }
  console.log(questionsArray.length, answersArray.length);
  questionsArray = shuffleArray(questionsArray); // randomizing order for questions
  answersArray = shuffleArray(answersArray);
  // layout playing board
  // questions
  let selectedQuestionIndex = 0; 
      for(let j = 0; j < 4; j++) {         //question cards
        for(let i = 0; i < 3; i++) {    
            // just setting x and y here
            questionsArray[selectedQuestionIndex].x = startingQuestionX;
            questionsArray[selectedQuestionIndex].y = startingQuestionY;
             selectedQuestionIndex++; // increment by 1
            startingQuestionX += 210;                       
        }
    startingQuestionY +=200;
    startingQuestionX = 60;   //sets starting location for new row              
    } 
    // setting answer cards
  let selectedAnswerIndex = 0; 
    for (let r = 0; r < 4; r++) {           //answer cards
        for (let q = 0; q < 3; q++) {   
            answersArray[selectedAnswerIndex].x = startingAnswerX;
            answersArray[selectedAnswerIndex].y = startingAnswerY;
            selectedAnswerIndex++; // tick up by 1
            startingAnswerX += 160;
        }
        startingAnswerY += 200;
        startingAnswerX = 720;   //sets starting location for new row              
    }
    
}

function draw() {

  // state.questionPhase = true;
  state.phase = QUESTION;
  //background("#f5cbd1");
  for(let m = 0; m < questionsArray.length; m++) {
    questionsArray[m].show();
  }
  for(let n = 0; n < answersArray.length; n++) {
    answersArray[n].show();
  }
  noLoop();
}

function mousePressed() {
  console.log(state.phase)
  // only allow questions to be clicked

  if (state.phase === QUESTION) {
    console.log("checking question")
    checkQuestionHit(mouseX, mouseY);  
  } else if (state.phase === CHECK) {
    console.log("checking answer")
    checkAnswerHit(mouseX, mouseY);
  } else {
    console.log("only answers can be selected right now") 
    
  }
  if (state.waiting === WAITING) {
    console.log("waiting to reset")
  }
  
}

function checkQuestionHit(mouseX, mouseY) {
// just like a for loop but different
 questionsArray.forEach((question) => {
  if(question.didHit(mouseX, mouseY)){
      state.currentQuestion = question;
      state.questionPhase = false;
      state.checkQuestionPhase = true;
      state.phase = CHECK;
      console.log("hit")
  }
 })

}
function checkAnswerHit(mouseX, mouseY) {
  for (let a = 0; a < answersArray.length; a++) {
    
    if (answersArray[a].didHit(mouseX, mouseY)) {
      state.currentAnswer = answersArray[a];
      state.checkQuestionPhase = false;
      state.waiting = true;
      state.phase = WAITING
      checkMatch();
    } else {
      loop();
    }
  }
}

function checkMatch() {
  background("#f5cbd1");
  console.log("checking match", state.currentQuestion.ref, state.currentAnswer.ref);
  if (state.currentQuestion.ref === state.currentAnswer.ref) {
    state.currentQuestion.isMatch = true;
    state.numMatches++;
    fill("#611e28");
    textSize(30);
    text("That's " + state.numMatches + " correct!", 720, 100); //correct answer feedback
    twinkle.play(); //sound for correct answer
    
    console.log("successful attempt")
    state.currentQuestion = null;
    state.currentAnswer = null;
    state.phase = QUESTION;
    loop();
  } else {
    fill("#611e28");
    textSize(30);
    text("Try again!", 500, 100); //feedback for incorrect answer
    console.log("oops! try again"); 

    noLoop();
    const loopTimeout = window.setTimeout(() => {  //time betwen card flips
      // state.waiting = false;
      // state.questionPhase = true;
      state.currentQuestion.face = DOWN
      state.currentQuestion = null;
      state.currentAnswer = null;
      console.log("move back to question phase")
      state.phase = QUESTION
                loop();
                window.clearTimeout(loopTimeout);

            }, 1000)
  }
}

class QuestionCard {
    constructor(cardFaceImg, ref) {            //problem card
      this.ref = ref;  
      this.x=0;
      this.y=0;
        this.width = 150;
        this.height = 150;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }

    show () {
        if(this.face === UP || this.isMatch) {      //checking for card face up or matched
            //fill("#aaa");
            square(this.x, this.y, this.width);
            image(this.cardFaceImg, this.x, this.y, this.width, this.height);
        } else {
            fill("#bef2f9");
            square(this.x, this.y, this.width);
            image(cardBack, this.x, this.y, this.width, this.height);
        }
       
    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width && 
            mouseY >= this.y && mouseY <= this.y + this.width) {
            this.flip();
            return true;
        } else {
            return false;
        }
    }
    flip () {
        if(this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
  
}

class AnswerCard {          //answer card
    constructor (cardAnswerImg, ref) {
      this.ref = ref;
      this.x=0;
      this.y=0;
        this.width = 100;
        this.height = 150;
        this.cardAnswerImg = cardAnswerImg;
        this.show();
    }
    show () {
        fill("#611e28");
        rect(this.x, this.y, this.width, this.height);
        image(this.cardAnswerImg, this.x, this.y);
    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width &&
            mouseY >= this.y && mouseY <= this.y + this.height) {
                return true;
            } else {
                return false;
            }
    }
 }  
function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
        const idx = Math.floor(Math.random() * counter);  //pick random index
        
        counter--;  //decrese counter by 1 (decrement)
        
        const temp = array[counter];  //swap the last element with it
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}

//restart game
const restartButton = document.getElementsById("restart");
//add event listener to restart button
restartButton.addEventListener("click", () => {
  console.log("restart");
});

