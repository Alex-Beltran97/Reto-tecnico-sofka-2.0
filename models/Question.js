export class Question {
    constructor(text,choices,answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    correctAnswer(choices){
        if (choices === this.answer){
            return true;
        }else{
            const choicesContainer = document.getElementById("choices").style.visibility = "hidden";
            alert("falso");
            alert("Al responder erradamente pierdes el dinero acumulado hasta el momento y finaliza el juego.");
            location.href = "../fin.html"
        }
    }
}

