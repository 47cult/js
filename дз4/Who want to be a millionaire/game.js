let game = {
    score: 0,
    nextQuestionIndex: 0,
    run() {
        if (!this.isQuestionsExists()) {
            console.log("Игра окончена, ваш счет " + this.score);
            this.nextQuestionIndex = 0;
            this.score = 0;
            if (confirm("Хотите сыграть ещё раз?")) {
                this.run();
            }
            return;
        }
        let result = leader.askQuestion(questions[this.nextQuestionIndex]);
        if (result) {
            this.score++;
        }
        this.nextQuestionIndex++;
        this.run();
    },
    isQuestionsExists() {
        return questions[this.nextQuestionIndex] !== undefined;
    }
}
console.log("Чтобы начать путь к своим 1-м миллионам, наберите game.run() и нажмите Enter");