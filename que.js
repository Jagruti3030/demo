
// Array of questions
const myQuestions = [
    {
      question: "Who invented JavaScript?",
      options: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich"],
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      options: ["Node.js", "TypeScript", "npm"],
      correctAnswer: "c"
    }
  ];
  
  // Function to build quiz
  function buildQuiz() {
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const output = [];
  
    // Generate the questions and options
    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];
      currentQuestion.options.forEach((option) => {
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${option}">
            ${option}
          </label>`
        );
      });
  
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });
  
    // Add the questions and options to the quiz container
    quizContainer.innerHTML = output.join("");
  }
  
  // Function to show results
  function showResults() {
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
  
    // Check the answers
    myQuestions.forEach( (currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = 'input[name=question${questionNumber}]:checked';
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      else {
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  
    // Show the results
    resultsContainer.innerHTML = '${numCorrect} out of ${myQuestions.length}';
  }
  
  // Run the buildQuiz function
  buildQuiz();
  
  // On submit, show results
  document.getElementById("submit").addEventListener('click', showResults);