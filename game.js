class Game {
  constructor(players, turnLeft = 10) {
    this.players = players;
    this.turnLeft = turnLeft;
  }

  newTurn() {
    this.turnLeft -= 1;
  }

  playersAlive() {
    return this.players.filter((player) => player.isCharacterKilled() == false);
  }

  displayWinners() {
    let winners = players.filter((player) => player.status == "winner");
    return winners.length == 1
      ? console.log(`${winners[0].name} a éclaté tout le monde et gagne !`)
      : console.log(`CHAMPION du RPG -Tuer ou Mourir-: ${winners.map((winner) => winner.name)}!!!!!!`);
  }

  gameOver() {
    console.log("La partie est fini !!!");
    this.playersAlive().map((player) => player.changeStatusToWinner());
    this.displayWinners();
  }

  DidSomeoneWin() {
    if (this.turnLeft == 0 || this.playersAlive().length == 1) {
      return true;
    }
  }

  watchStats(players) {
    players.map((player) =>
      alert(
        `Nom: ${player.name} \nClass: ${player.constructor.name} \nHP: ${player.hp} \nDégats: ${player.dmg} \nMana: ${player.mana}`
      )
    );
  }
}
