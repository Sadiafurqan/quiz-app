const correctAnswers = {
    q1: 'A', // Paris
    q2: 'B', // 4
    q3: 'B'  // Mars
};

function submitQuiz() {
    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;

    for (let i = 1; i <= totalQuestions; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedOption) {
            const answer = selectedOption.value;
            if (answer === correctAnswers[`q${i}`]) {
                score++;
            }
        }
    }

    const resultText = `You scored ${score} out of ${totalQuestions}.`;
    document.getElementById('result').textContent = resultText;
}
