let userScore = 0;
let compScore = 0;
let hide = document.querySelector(".hide")
let reset =document.querySelector(".reset") 
const uscore = document.querySelector("#u-score") 
const cscore = document.querySelector("#c-score")
const choices = document.querySelectorAll(".choice")

const msg = document.querySelector("#msg"); 

const draw = (userChoice,compchoice) => {
     console.log("Game was draw")
     msg.innerText = `its a draw:both ${userChoice} distroyed`;
     msg.style.backgroundColor = "black ";
     //  alert("draw")
    };

    const gencompChoice = () => {
        const options = ["rock", "paper", "scissor"];
        const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userwin,userChoice,compchoice) => {
    if (userwin) {
        userScore++;
        uscore.innerText = userScore ;
        console.log("you win");
        msg.innerText = `Congrates you win ${userChoice} beats ${compchoice}`;   
        msg.style.backgroundColor = "green";
        // uscore.innertext = "1"
    } else{
        compScore++;
        cscore.innerText = compScore;
        console.log("you loss");
        msg.innerText = `you loss: try again ${compchoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        // cscore.innertext = "1"
    }
}

const playGame = (userChoice) => {
    console.log("choice was clicked =",userChoice);
    const compchoice = gencompChoice();
    console.log("comp choice =", compchoice);
    
    if (  userChoice === compchoice) {
        draw(userChoice,compchoice);
    } else {
        let userwin = true;
        if(userChoice === "rock"){
           userwin = compchoice === "paper" ? false:true;
        } else if (userChoice === "paper"){
            userwin = compchoice === "scissor"? false:true; 
        }else{
            userwin = compchoice === "rock"?false:true;
        }
        showWinner(userwin,userChoice,compchoice);
        }

    }

choices.forEach((choice)  => { 
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")   
        playGame(userChoice);
    });
});

 const resetscore = () => {
     userScore = 0 ;
     compScore = 0 ;
     cscore.innerText = 0 ;
     uscore.innerText = 0 ;
     msg.innerText = "Play your move"
     msg.style.backgroundColor = "black";
     cscore.classList.remove("hide")
     
}
  
reset.addEventListener("click",() => {
    resetscore();
})







