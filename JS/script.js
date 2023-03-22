const questions = [
  {
    que: "Javascript is an _______ language.",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Assembly-language",
    d: "High-level",
    correct: "a",
  },
  {
    que: "When interpreter encounters an empty statements, what it will do ?",
    a: "Shows a warning",
    b: "Prompts to complete the statement",
    c: "Throws an error",
    d: "Ignores the statements",
    correct: "d",
  },
  {
    que: "Which one of the following also known as Conditional Expression ?",
    a: "Alternative to if-else",
    b: "Switch statement",
    c: "If-then-else statement",
    d: "immediate if",
    correct: "d",
  },
  {
    que: "The 'function' and 'var' are known as ?",
    a: "Keywords",
    b: "Data types",
    c: "Declaration statements",
    d: "Prototypes",
    correct: "c",
  },
];

let index = 0;
let total = questions.length;
let correct = 0;
var right = 0;
var wrong = 0;

const queBox = document.getElementById("queBox");
const options = document.querySelectorAll(".options");

const questionsData = () => {
  //questions loading
  if (index === total) {
    return endQuiz();
  }
  reset();
  let data = questions[index];
  console.log(options);
  queBox.innerText = `${index + 1} ${data.que}`;
  options[0].nextElementSibling.innerText = data.a;
  options[1].nextElementSibling.innerText = data.b;
  options[2].nextElementSibling.innerText = data.c;
  options[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  let data = questions[index];
  const ans = getAns();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  questionsData();
  return;
};
const getAns = () => {
  let answer;
  options.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  options.forEach((input) => {
    input.checked = false;
  });
};
const endQuiz = () => {
  document.getElementById("box").innerHTML = `
  <div style="text-align:center">
    <h3>Thank you for playing the quize</h3> </br>
    <div>
    <p >Your final result</p> </br>
    </div>
    <div style="border: 1px solid gray; width: 20%; margin: auto;
     background: rgb(245, 236, 236); border-radius: 2px;"> 
    <strong>${right} / ${total}</strong>
    </div>
</div>
    `;
};
questionsData();
