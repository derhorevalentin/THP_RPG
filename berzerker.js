class Berzerker extends Character {
  constructor(name, hp, dmg, mana, status, hasplayed) {
    super(name, (hp = 8), (dmg = 5), (mana = 0), status, hasplayed);
    this.spe = "Rage";
  }

  specialMove(victim) {
    this.dmg += 2;
    this.hp -= 1;
    console.log(`${this.name} claque ${this.spe}.${this.name} a gagné 2 points de dégat mais à perdu 1 hp `);   
  }

  watchSpecialMove() {
    alert(`${this.spe}\n- Augmente l'attaque de 2 points de dégat.\n- Fait perdre 1 hp.`);
  }
}
