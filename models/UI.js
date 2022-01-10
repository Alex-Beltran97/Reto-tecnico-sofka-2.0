export class UI {
    constructor(){}

    showQuestion(text){
        const questionTitle = document.getElementById("question");
        questionTitle.innerHTML = text;
    }
    showChoices(choices,callBack){
        const choicesContainer = document.getElementById("choices");
        choicesContainer.innerHTML = " ";
        
        for (let i = 0; i < choices.length; i++){
            const button = document.createElement("button");
            button.innerHTML = choices[i];
            choicesContainer.appendChild(button)
            button.className = "button";
            button.addEventListener("click", () =>callBack(choices[i]));
            
        }
        
    }
    showScores(score){
        alert(`tu puntaje es de: ${score}`);
        localStorage.setItem("score",score);
    }
    showProgress(currentIndex, total){
        const element = document.getElementById("progress");
        element.innerHTML = `Pregunta ${currentIndex} de ${total}`

    }
}


