const playerChoice = document.querySelector(".player-choice");
const randomChoice = document.querySelector(".random-choice");
const playerScore = document.getElementById("player-score");
const randomScore = document.getElementById("random-score");

// PLayer Buttons //
let choices = ["pierre", "feuille", "ciseaux"];
let player = "";
let playerPoints = 0;
let randomPoints = 0;
const imgRock = document.createElement("img");
const imgPaper = document.createElement("img");
const imgScissors = document.createElement("img");
const imgRandom = document.createElement("img");
imgRock.src = "./img/pierre.jpg";
imgPaper.src = "./img/feuille.jpg";
imgScissors.src = "./img/ciseaux.jpg";

rock.addEventListener("click", () => {
  imgRock.height = "200";
  playerChoice.innerHTML = "";
  playerChoice.appendChild(imgRock);
  player = "rock";
  randomChoice.innerHTML = "";
  random = Math.floor(Math.random() * 3);
  imgRandom.src = `./img/${choices[random]}.jpg`;
  imgRandom.height = "200";
  randomChoice.appendChild(imgRandom);
  setTimeout(() => {
    randomChoice.innerHTML = "";
  }, 1500);

  if (random === 2) {
    playerPoints++;
  } else if (random === 1) {
    randomPoints++;
  }

  playerScore.innerHTML = playerPoints;
  randomScore.innerHTML = randomPoints;

  if (playerPoints == 3) {
    setTimeout(() => {
      playerChoice.innerHTML = "<h3>Victoire </h3>";
      playerPoints = 0;
      randomPoints = 0;
      playerScore.innerHTML = playerPoints;
      randomScore.innerHTML = randomPoints;
    }, 1500);
  }
  if (randomPoints == 3) {
    setTimeout(() => {
      playerChoice.innerHTML = "<h3>Défaite </h3>";
      playerPoints = 0;
      randomPoints = 0;
      playerScore.innerHTML = playerPoints;
      randomScore.innerHTML = randomPoints;
    }, 1500)
  }
});

paper.addEventListener("click", () => {
  imgPaper.height = "200";
  playerChoice.innerHTML = "";
  playerChoice.appendChild(imgPaper);
  player = "paper";

  random = Math.floor(Math.random() * 3);
  imgRandom.src = `./img/${choices[random]}.jpg`;
  randomChoice.innerHTML = "";
  imgRandom.height = "200";
  randomChoice.appendChild(imgRandom);
  setTimeout(() => {
    randomChoice.innerHTML = "";
  }, 1500);

  if (random === 0) {
    playerPoints++;
  } else if (random === 2) {
    randomPoints++;
  }

  playerScore.innerHTML = playerPoints;
  randomScore.innerHTML = randomPoints;

  if (playerPoints == 3) {
    setTimeout(() => {
      playerChoice.innerHTML = "<h3>Victoire</h3>";
      playerPoints = 0;
      randomPoints = 0;
      playerScore.innerHTML = playerPoints;
      randomScore.innerHTML = randomPoints;
    }, 1500);
  }
  if (randomPoints == 3) {
    setTimeout(() => {
      playerChoice.innerHTML = "<h3>Défaite</h3>";
      playerPoints = 0;
      randomPoints = 0;
      playerScore.innerHTML = playerPoints;
      randomScore.innerHTML = randomPoints;
    }, 1500)
  }
});

scissors.addEventListener("click", () => {
  imgScissors.height = "200";
  playerChoice.innerHTML = "";
  playerChoice.appendChild(imgScissors);
  player = "scissors";

  random = Math.floor(Math.random() * 3);
  imgRandom.src = `./img/${choices[random]}.jpg`;
  randomChoice.innerHTML = "";
  imgRandom.height = "200";
  randomChoice.appendChild(imgRandom);
  setTimeout(() => {
    randomChoice.innerHTML = "";
  }, 1500);

  if (random === 1) {
    playerPoints++;
  } else if (random === 0) {
    randomPoints++;
  }

  playerScore.innerHTML = playerPoints;
  randomScore.innerHTML = randomPoints;

  if (playerPoints == 3) {
    setTimeout(() => {
      playerChoice.innerHTML = "<h3>Victoire</h3>";
      playerPoints = 0;
      randomPoints = 0;
      playerScore.innerHTML = playerPoints;
      randomScore.innerHTML = randomPoints;
    }, 1500);
  }
  if (randomPoints == 3) {
    setTimeout(() => {
      playerChoice.innerHTML = "<h3>Défaite</h3>";
      playerPoints = 0;
      randomPoints = 0;
      playerScore.innerHTML = playerPoints;
      randomScore.innerHTML = randomPoints;
    }, 1500)
  }
  
});
