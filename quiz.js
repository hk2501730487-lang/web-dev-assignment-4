// 1. Quiz Questions Array
const quizQuestions = [
    { question: "What is the capital of India?", answer: "delhi" },
    { question: "What is 5 + 7?", answer: "12" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" },
    { question: "What is the chemical symbol for water?", answer: "h2o" },
    { question: "Who wrote the Ramayana?", answer: "valmiki" }
];

// 2. Function to Run the Quiz
function runQuiz() {
    let score = 0; // 3. Score Initialization

    // 4. Loop Through Questions
    for (let i = 0; i < quizQuestions.length; i++) {
        let userInput = prompt(quizQuestions[i].question); // 5. Prompt

        // If user cancels prompt
        if (userInput === null) {
            alert("Quiz cancelled.");
            return;
        }

        // 6. Normalize the Input
        userInput = userInput.toLowerCase().trim();

        // 7. Check the Answer
        if (userInput === quizQuestions[i].answer) {
            score++;
            // 8. Provide Immediate Feedback
            alert("Correct! ✔️");
        } else {
            alert("Wrong ❌\nCorrect answer: " + quizQuestions[i].answer);
        }
    }

    // 9. Display the Final Score
    alert(`Quiz Completed!\nYour Score: ${score} / ${quizQuestions.length}`);
}

// 10. Run the Quiz in Browser Console
runQuiz();
