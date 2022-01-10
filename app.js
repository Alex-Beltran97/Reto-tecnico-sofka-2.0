import {questions} from "./data/questions.js";
import {Quiz} from "./models/Quiz.js";
import {UI} from "./models/UI.js"

const renderPage = (quiz,ui) => {   
    if (quiz.final()){
        ui.showScores(quiz.score);
    }else{
        ui.showQuestion(quiz.getQuestionIndex().text);
        ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice)=>{
        quiz.guess(currentChoice);
        renderPage(quiz,ui);
    });
    ui.showProgress(quiz.questionIndex+1,quiz.questions.length);
    }
    
}

function rendirse(quiz,ui){
    const newElement = document.querySelector(".quiz");
    const botonRendirse = document.createElement("button");
    const textBoton = document.createTextNode("Rendirse");
    botonRendirse.appendChild(textBoton);
    newElement.appendChild(botonRendirse);
    botonRendirse.className = "rendirse";

    

    
    botonRendirse.addEventListener("click", ()=>{
        const choicesContainer = document.getElementById("choices").style.visibility = "hidden";
        const questionTitle = document.getElementById("question");
        questionTitle.innerHTML = `<p style="font-size: 25px"><b>Haz</b> decidio retirarte dignamente con lo que haz acumulado hasta ahora.
                                tu total es de:  $ <b style="font-size: 60px"> ${quiz.score}</b>000 dolares</p>
                                
                                
                                <a href="fin.html">
        <img src="Style/Imagen1.png" alt="" width="250px" >
    </a>`;
   
   

    let score = quiz.score;
    localStorage.setItem("score",score);
    })
}

function main(){
    const quiz = new Quiz(questions);
    const ui = new UI();
    
    rendirse(quiz,ui);
    renderPage(quiz,ui);
}

main();

