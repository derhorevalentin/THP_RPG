class Wizard extends Character {
  constructor(name, hp, dmg, mana, status, hasplayed) {
    super(name, (hp = 8), (dmg = 4), (mana = 200), status, hasplayed);
    this.spe = "Fire comet";
  }


  specialMove(victim) {
    this.dmg = 7;
    console.log(`${this.name} claque ${this.spe} sur ${victim.name}.`);
    this.dealDamage(victim);
    this.dmg = 4;
    this.mana -= 25;
  }

  watchSpecialMove() {
    alert(
      `${this.spe}\n- Inflige 7 points de dégats.\n- Coûte 25 points de mana.`
    );
  }
}
