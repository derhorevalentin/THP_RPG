class Monk extends Character {
  constructor(name, hp, dmg, mana, status, hasplayed) {
    super(name, (hp = 8), (dmg = 2), (mana = 200), status, hasplayed);
    this.spe = "Heal";
    this.actived = false;
  }

  specialMove() {
    this.hp += 8;
    this.mana -= 25;
    console.log(`${this.name} utilise ${this.spe} et gagne 8 points de vie.`);
  }

  watchSpecialMove() {
    alert(
      `${this.spe}\n- Restaure 8 points de vie.\n- Coûte 25 points de mana.`
    );
  }
}
