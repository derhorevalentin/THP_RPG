class Character {
  constructor(name, hp, dmg, mana, status = "playing", hasplayed = false) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = status;
    this.hasplayed = hasplayed;
  }

  takeDamage(damage) {
    this.hp -= damage;
    console.log(
      `${this.name} reçois ${damage} de dégats.${this.name} à ${this.hp} hp.`
    );
  }

  dealDamage(victim) {
    console.log(`${this.name} inflige ${this.dmg} de dégats à ${victim.name}.`);
    victim.takeDamage(this.dmg);

    if (this.didItKill(victim) == true) {
      this.mana += 20;
      victim.changeStatusToLoser();
      console.log(
        `${this.name} gagne 20 points de mana pour avoir buté ${victim.name}.`
      );
    }
  }

  specialMove() {}

  watchSpecialMove() {}

  isCharacterKilled() {
    return this.hp <= 0 ? true : false;
  }

  changeStatusToLoser() {
    if (this.isCharacterKilled() == true) {
      this.status = "loser";
      console.log(`${this.name} est mort RIP.`);
    }
  }

  changeStatusToWinner() {
    if (this.isCharacterKilled() == false) {
      this.status = "winner";
      console.log(`Nous avons nôtre champion ${this.name}!!!!!`)
    }
  }

  didItKill(victim) {
    return victim.isCharacterKilled() == true ? true : false;
  }
}
