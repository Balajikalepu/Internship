// Sample quiz questions
const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    // Add more questions as needed
];

// Sample flashcards
const flashcards = [
    {
        question: "What is the capital of Japan?",
        answer: "Tokyo"
    },
    // Add more flashcards as needed
];

// Function to display quiz questions
function displayQuizQuestions() {
    const quizContainer = document.getElementById("quiz-container");

    quizQuestions.forEach((question, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("quiz-question");
        questionElement.innerHTML = `<p>${index + 1}. ${question.question}</p>`;

        question.options.forEach((option, optionIndex) => {
            const optionElement = document.createElement("label");
            optionElement.innerHTML = `
                <input type="radio" name="question${index}" value="${option}">
                <span class="answer-option">${option}</span>
            `;
            questionElement.appendChild(optionElement);
        });

        quizContainer.appendChild(questionElement);
    });
}

// Function to display flashcards
function displayFlashcards() {
    const flashcardsContainer = document.getElementById("flashcards-container");

    flashcards.forEach((flashcard, index) => {
        const flashcardElement = document.createElement("div");
        flashcardElement.classList.add("flashcard");
        flashcardElement.innerHTML = `
            <p><strong>Q:</strong> ${flashcard.question}</p>
            <p><strong>A:</strong> ${flashcard.answer}</p>
        `;

        flashcardsContainer.appendChild(flashcardElement);
    });
}

// Call the functions to display quiz questions and flashcards
displayQuizQuestions();
displayFlashcards();
