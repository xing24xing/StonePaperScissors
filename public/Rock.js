let userscore = 0;
let computerscore = 0;
const choise = document.querySelectorAll(".choise");
const  msg = document.querySelector("#msg");
const userscorepara = document.querySelector('#user-score');
const computerscorepara = document.querySelector('#comp-score');

const gencompchoise = () =>{
	const opt = ["Rock" ,"Paper" ,"Scissors"];
	const random = Math.floor(Math.random() * 3);
	return opt[random];
}
const drawgame =() =>{
	console.log("Draw")
	msg.innerText="The Game Was Draw!"
	msg.style.backgroundColor="#081b31";
}

const showwinner =(userwin,userchoise,compchoise) =>{
if(userwin)
{
	userscore++;
	userscorepara.innerText = userscore;
	msg.innerHTML = `You Win! Your ${userchoise} beats ${compchoise}`;
	console.log("you win");
	msg.style.backgroundColor="green";
}
else{
	computerscore++;
	computerscorepara.innerText = computerscore;
	msg.innerHTML=`You Loss! ${compchoise} Beats Your ${userchoise}`;
	console.log("you loss");
	msg.style.backgroundColor="red";
}

}

const playgame = (userchoise) =>{
  console.log("Your Choise",userchoise);
  const compchoise = gencompchoise();
  console.log("computer choise",compchoise);
  if(userchoise == compchoise)
  {
   drawgame();
  }
  else
  {
  	let userwin = true;
  	if(userchoise == "Rock")
  	{
  		userwin = compchoise == "Paper" ? false:true;
  	}
  	else if(userchoise == "Paper")
  	{
  		userwin = compchoise == "Scissors" ? false:true;
  	}
  	else
  	{
  		userwin= compchoise == "Rock" ? false:true;
  	}
  	showwinner(userwin,userchoise,compchoise);
  }
}

choise.forEach((choise) =>{
	console.log(choise);
	choise.addEventListener("click",()=>{
	const userchoise = choise.getAttribute('id');
      playgame(userchoise)
	})
})

