// Select containers and submit button
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const friendsQuestions = [
    {
      question: "1. What is the name of Rachel’s hairless cat?",
      answers: {
        a: "Baldy",
        b: "Mrs. Whiskerson",
        c: "Fluffy",
        d: "Sid"
      },
      correctAnswer: "b"
    },
    {
        question: "2. What is the name of Phoebe’s alter ego?",
        answers: {
          a: "Phoebe Needy",
          b: "Monica Bing",
          c: "Lacy Bobbins",
          d: "Regina Falange"
        },
        correctAnswer: "d"
    },
    {
        question: "3. How many times did Ross get divorced?",
        answers: {
          a: "3",
          b: "2",
          c: "6",
          d: "1"
        },
        correctAnswer: "a"
    }
    ,
    {
        question: "4. Who was the maid of honor at Monica’s wedding?",
        answers: {
          a: "Susan",
          b: "Rachel",
          c: "Phoebe",
          d: "Jenny"
        },
        correctAnswer: "b"
    }
    ,
    {
        question: "5. What was the name of Joey’s imaginary best friend when he was a child?",
        answers: {
          a: "Maurice",
          b: "Donald",
          c: "Henry",
          d: "Lilly"
        },
        correctAnswer: "a"
    }
    ,
    {
        question: "6. Which one of the friends got mugged when they were younger?",
        answers: {
          a: "Rachel",
          b: "Chandler",
          c: "Phoebe",
          d: "Ross"
        },
        correctAnswer: "d"
    }
    ,
    {
        question: "7. Who peed on Monica when she got stung by a jellyfish?",
        answers: {
          a: "Rachel",
          b: "Phoebe",
          c: "Chandler",
          d: "Joey"
        },
        correctAnswer: "c"
    }
    ,
    {
        question: "8. What is Ross’s profession?",
        answers: {
          a: "Archeologist",
          b: "Biochemist",
          c: "Epidimiologist",
          d: "Paleontologist"
        },
        correctAnswer: "d"
    }
    ,
    {
        question: "9. After Richard and Monica break up, what does Monica become obsessed with?",
        answers: {
          a: "Baking Cookies",
          b: "Making Jam",
          c: "Knitting",
          d: "Watching Movies"
        },
        correctAnswer: "b"
    }
    ,
    {
        question: "10. What is Chandler’s father’s job?",
        answers: {
          a: "Golf Ball Diver",
          b: "Dog Food Taster",
          c: "A Drag Queen in Vegas",
          d: "Archicist in Europe"
        },
        correctAnswer: "c"
    }
  ];

const buildQuiz = () => {
const output = [];

friendsQuestions.forEach(
  (currentQuestion, questionNumber) => {

    // Possible Answers
    const answers = [];

    // Loop through available answers
    for(letter in currentQuestion.answers){
      // HTML Radio Button
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${currentQuestion.answers[letter]}
        </label>`
      );
    }

    // Add Question and Answer to Output
    output.push(
      `<div class="question font-dosis"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join('')} </div>`
    );
  }
);

// Combine output list into quiz
quizContainer.innerHTML = output.join('');
console.log(quizContainer.innerHTML)
}

const showResults= () => {
    
  // Select Answers
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // User Score
  let numCorrect = 0;

  // Feedback based off of User Score
  const quizFeedback = []

  friendsQuestions.forEach( (currentQuestion, questionNumber) => {

    // Find User Answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if(userAnswer === currentQuestion.correctAnswer){
      numCorrect++;

      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    else{
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  if (numCorrect <= 3) {
      quizFeedback.push('It looks like you need to turn on the tv and enjoy Friends!')
  } else if(numCorrect <=6) {
        quizFeedback.push('Not bad... You definitely don’t need a break from Friends')
  } else if(numCorrect <=8) {
        quizFeedback.push('Pivot on over because we’re going to be great friends!')
  } else {
        quizFeedback.push("Wow, you really are Friend's lobster... You and the tv show are soulmates!")
}
  resultsContainer.innerHTML = `<div><p>${numCorrect} out of ${friendsQuestions.length}</p><p>${quizFeedback[0]}</p></div>`;

}

buildQuiz();

submitButton.addEventListener('click', showResults);