let userScore = 0;
let computerScore = 0;
let timer;
let timeLeft = 40;
let gameStarted = false;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector('#user-score');
const computerScorePara = document.querySelector('#comp-score');
const congrats = document.querySelector("#congrats");
const winnerMsg = document.querySelector("#winner-msg");
const timerElement = document.querySelector("#timer");
const startBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");

const startTimer = () => {
	timer = setInterval(() => {
		timeLeft--;
		timerElement.innerText = timeLeft;
		if (timeLeft <= 0) {
			clearInterval(timer);
			displayCongrats(false, true);
			resetGame();
		}
	}, 1000);
}

const stopTimer = () => {
	clearInterval(timer);
}

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
	checkOverallWinner();
}

const checkOverallWinner = () => {
	if (userScore === 10) {
		stopTimer();
		displayCongrats(true, false);
		resetGame();
	} else if (computerScore === 10) {
		stopTimer();
		displayCongrats(false, false);
		resetGame();
	}
}

const displayCongrats = (userWon, timeUp) => {
	if (timeUp) {
		winnerMsg.innerHTML = "😢 Time's up! Computer wins! Try next time to win! 😢";
	} else if (userWon) {
		winnerMsg.innerHTML = "😊 Congratulations! You are the overall winner! 😊";
	} else {
		winnerMsg.innerHTML = "😢 Computer is the overall winner! Try next time to win! 😢";
	}
	congrats.style.display = "flex";
	setTimeout(() => {
		congrats.style.display = "none";
	}, 5000);
}

const resetGame = () => {
	stopTimer();
	userScore = 0;
	computerScore = 0;
	userScorePara.innerText = userScore;
	computerScorePara.innerText = computerScore;
	msg.innerText = "Play your move";
	msg.style.backgroundColor = "#081b21";
	timeLeft = 40;
	timerElement.innerText = timeLeft;
	gameStarted = false;
}

const game = (userChoice) => {
	if (!gameStarted) {
		msg.innerHTML = "Please start the game first!";
		msg.style.backgroundColor = "#f0ad4e";
		return;
	}
	const computerChoice = genCompChoice();
	console.log(userChoice);
	console.log(computerChoice);
	if (userChoice === computerChoice) {
		drawGame();
	} else {
		const result = (userChoice === "Rock" && computerChoice === "Scissors") ||
			(userChoice === "Paper" && computerChoice === "Rock") ||
			(userChoice === "Scissors" && computerChoice === "Paper");
		showWinner(result, userChoice, computerChoice);
	}
}

choices.forEach(choice => {
	choice.addEventListener("click", () => {
		game(choice.id);
	});
});

startBtn.addEventListener("click", () => {
	resetGame();
	gameStarted = true;
	startTimer();
});

stopBtn.addEventListener("click", () => {
	stopTimer();
	gameStarted = false;
});
