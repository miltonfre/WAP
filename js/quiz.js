class Student {
    constructor(sId) {
        this.studentId = sId;
        this.answers = [];
    }
    addAnswer = function (ans) {
        this.answers.push(ans);
    }
}

class Question {
    constructor(qId, ans) {
        this.questionId = qId;
        this.answer = ans;
    }
    checkAnswer = function (ans) {
        return this.questionId === ans.questionId && this.answer=== ans.answer;
    }
}

class Quiz {
    constructor(q, s) {
        this.questions = q;
        this.students = s;
    }
    scoreStudentBySid = function (studentId) {
        let student = this.students.filter(s => s.studentId === studentId)[0];       
        let score = 0;
        for (let i = 0; i < student.answers.length; i++) {
            let answer = student.answers[i];
            let q = this.questions.filter(q => q.questionId === answer.questionId)[0];
            if (answer.checkAnswer(q)) {
                score++;
            }
        }
        return score;
    }
    getAverageScore = function () {
        let score = 0;
        this.students.forEach(student => {
            score += this.scoreStudentBySid(student.studentId);
        });
        return score / this.students.length;
    }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions = [new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5
