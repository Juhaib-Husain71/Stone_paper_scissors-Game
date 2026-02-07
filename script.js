let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let usermsg = document.querySelector("#user-score");
let compmsg = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let randIdx = Math.floor(Math.random()*3);

    return options[randIdx];
}

const drawGame = () => {
    //console.log("Draw");
    msg.innerText = "Game was Draw. Play again..";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        //console.log("you win!");
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

        usermsg.innerText = ++userScore;
    }else{
        //console.log("you lose");
        msg.innerText = `you lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

        compmsg.innerText = ++compScore;
    }
}
const playGame = (userChoice) => {
    //console.log("user's choice is", userChoice);
    let compChoice = genCompChoice();
    //console.log("computer's choice is", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper, scissors
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
      
        playGame(userChoice);
    })
})