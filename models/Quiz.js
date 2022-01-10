export class Quiz{

    questionIndex = 0;
    score = 0 ;
    constructor(questions){
        this.questions = questions;
    }
    getQuestionIndex(){
        return this.questions[this.questionIndex];
    }
    final(){
        if(this.questionIndex > 24){
            location.href = "fin.html";
            return true;
        } 
    }
    
    guess(answer){
        console.log(answer);
        if (this.getQuestionIndex().correctAnswer(answer)){
            this.score++
        }
        
        this.questionIndex++
    }
    
}
