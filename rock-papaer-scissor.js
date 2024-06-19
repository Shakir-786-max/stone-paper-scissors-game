let userScore= 0;
let compScore=0;



const choices=document.querySelectorAll(".choice");


const drawGame= ()=>{
    console.log("game was draw");
}

const showWinner= (userWin)=>{
    if (userWin){
        console.log("you win");
    }else{
        console.log("you lost");
    }
}

const genCompChoice= ()=>{
const options =["rock","paper","scissor",];
const rndmIndx= Math.floor(Math.random()*3);
return options [rndmIndx];
}
const playGame= (userChoice)=>{
console.log("userchoice =", userChoice);
const compChoice= genCompChoice();
console.log("comp choice =", compChoice);

if (userChoice===compChoice) {
    drawGame();
}else {
    let userWin= true;
    if (userChoice==="rock"){
        userWin=compChoice==="paper"? false:true;
    }else if (userChoice==="paper"){
       userWin= compChoice==="scissor" ?false:true;
    }else{
        userWin= compChoice==="rock"? false:true;
    }
    showWinner(userWin);
}
}

choices.forEach ((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was cliked", userChoice);
        playGame(userChoice);
    });
});