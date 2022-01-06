class Vampire extends Character {
  constructor(name, hp, dmg, mana, status, hasplayed) {
    super(name, (hp = 11), (dmg = 4), (mana = 100), status, hasplayed);
    this.spe = "Drainer";
    this.actived = false;
  }

  specialMove(victim) {
    this.dmg = 6;
    console.log(`${this.name} claque ${this.spe} sur ${victim.name}`);
    this.dealDamage(victim);
    console.log(`${this.name} se soigne de 3 hp`);
    this.dmg = 4;
    this.hp += 3;
    this.mana -= 30;
  }

  watchSpecialMove() {
    alert(
      `${this.spe}\n- Inflige 6 points à son adversaire.\n- Et soigne de 3 hp.\n- Utilise 30 points de mana.`
    );
  }

}
