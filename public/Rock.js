let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector('#user-score');
const computerScorePara = document.querySelector('#comp-score');

const genCompChoice = () => {
	const options = ["Rock", "Paper", "Scissors"];
	const random = Math.floor(Math.random() * 3);
	return options[random];
}

const drawGame = () => {
	console.log("Draw");
	msg.innerText = "The Game Was Draw!";
	msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
	if (userWin) {
		userScore++;
		userScorePara.innerText = userScore;
		msg.innerHTML = `You Win! Your ${userChoice} beats ${compChoice}`;
		console.log("You win");
		msg.style.backgroundColor = "green";
	} else {
		computerScore++;
		computerScorePara.innerText = computerScore;
		msg.innerHTML = `You Lose! ${compChoice} Beats Your ${userChoice}`;
		console.log("You lose");
		msg.style.backgroundColor = "red";
	}
}

const playGame = (userChoice) => {
	console.log("Your Choice", userChoice);
	const compChoice = genCompChoice();
	console.log("Computer Choice", compChoice);
	if (userChoice == compChoice) {
		drawGame();
	} else {
		let userWin = true;
		if (userChoice == "Rock") {
			userWin = compChoice == "Paper" ? false : true;
		} else if (userChoice == "Paper") {
			userWin = compChoice == "Scissors" ? false : true;
		} else {
			userWin = compChoice == "Rock" ? false : true;
		}
		showWinner(userWin, userChoice, compChoice);
	}
}

choices.forEach((choice) => {
	console.log(choice);
	choice.addEventListener("click", () => {
		const userChoice = choice.getAttribute('id');
		playGame(userChoice);
	});
});
