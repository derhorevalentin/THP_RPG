const Illidan = new Fighter("Illidan");
const Uther = new Paladin("Uther");
const Garrosh = new Berzerker("Garrosh");
const Dracula = new Vampire("Dracula");
const Sohei = new Monk("Sohei");
const Jainna = new Wizard("Jainna");

let players = [Illidan, Uther, Garrosh, Dracula, Sohei, Jainna];

const GAME = new Game(players);

alert("Bienvenue dans -Tuer ou Mourir-!!!!! , Battez-vous à mort !");
alert("Appuie sur entrer ou ok pour lancer la partie");

while (GAME.turnLeft > 0 && !GAME.DidSomeoneWin()) {
  GAME.newTurn();
  let turn = new Turn(players, GAME.turnLeft);
  turn.startTurn();
  turn.turnPlay();
}

GAME.gameOver();
