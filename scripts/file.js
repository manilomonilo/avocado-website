let questions = document.querySelectorAll(".faq-section .faq-section__question");
let answers = document.querySelectorAll(".faq-section .faq-section__answer");

// Iterate over each question
questions.forEach((question, index) => {
    question.addEventListener("click", () => {
        // Toggle the display of the corresponding answer
        let answer = answers[index];
        if (answer.style.display === "none") {
            answer.style.display = "block"; // Show answer
        } else {
            answer.style.display = "none"; // Hide answer
        }
    });
});
