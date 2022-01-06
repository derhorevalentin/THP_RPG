class Turn extends Game {
  constructor(players, turnLeft) {
    super(players, turnLeft);
    this.turnNumber = 10 - turnLeft;
  }

  startTurn() {
    alert(`Tour n°${this.turnNumber}`);
    this.setHasplayedToFalse(this.playersAlive());
  }

  pickPlayerRandomly(players) {
    let randomPlayer = players[Math.floor(Math.random() * players.length)];
    alert(`${randomPlayer.name}, à toi de jouer !`);
    return randomPlayer;
  }

  playerActionsMenu(player) {
    let playerResponse = prompt(
      `${player.name}, Choisis ton action: \n-Entrer [0] pour défouraille un autre joueur \n-Entrer [1] Pour voir tes states \n-Entrer [2] Pour voir les states des autres joueurs  \n-Entrer [3] Pour voir ton attaque spécial \n-Entrer [4] Pour claquer ton attaque spécial`
    );

    switch (playerResponse) {
      case "0":
        player.dealDamage(this.chooseTarget(player))
        break;

      case "1":
        this.watchYourStats(player);
        this.playerActionsMenu(player);
        break;

      case "2":
        this.watchTheyStats(player);
        this.playerActionsMenu(player);
        break;

      case "3":
        player.watchSpecialMove();
        this.playerActionsMenu(player);
        break;
  

      case "4":
        if (
          player.constructor.name == "Fighter" ||
          player.constructor.name == "Paladin" ||
          player.constructor.name == "Berzerker" ||
          player.constructor.name == "Vampire" ||
          player.constructor.name == "Monk" ||
          player.constructor.name == "Wizard" 
        ) {
          player.specialMove(this.chooseTarget(player));
        } else {
          player.specialMove();
        }
        break;

      default:
        alert("Mauvaise choix, entrer à nouveau");
        this.playerActionsMenu(player);
    }

    player.hasplayed = true;
  }

  chooseTarget(player) {
    let targets = this.playersAlive().filter((target) => target != player);

    let indexes = Array.from(Array(targets.length).keys());

    let question = `${player.name}, Qui veux tu défouraille ?`;
    for (let i in targets) {
      question += `\nEntrer [${i}] pour attaquer ${targets[i].name}`;
    }
    let playerResponse = prompt(question);

    if (indexes.includes(parseInt(playerResponse))) {
      return targets[parseInt(playerResponse)];
    } else {
      alert("Mauvaise choix, entrer à nouveau!");
      this.chooseTarget(player);
    }
  }

  playersAliveAndHaventPlayed() {
    return this.playersAlive().filter((player) => player.hasplayed == false);
  }

  turnPlay() {
    while (
      this.playersAliveAndHaventPlayed().length > 0 &&
      this.playersAlive().length > 1
    ) {
      this.playerActionsMenu(
        this.pickPlayerRandomly(this.playersAliveAndHaventPlayed())
      );
    }
  }

  watchTheyStats(player) {
    this.watchStats(this.playersAlive().filter((p) => p != player));
  }

  watchYourStats(player) {
    this.watchStats(this.playersAlive().filter((p) => p == player));
  }


  setHasplayedToFalse(players) {
    players.map((player) => (player.hasplayed = false));
  }

  deactivateFigthersSpe(players) {
    players
      .filter((player) => player.constructor.name == "Fighter")
      .map((player) => player.resetSpe());
  }
}
