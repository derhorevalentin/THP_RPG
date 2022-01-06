class Paladin extends Character {
  constructor(name, hp, dmg, mana, status, hasplayed) {
    super(name, (hp = 14), (dmg = 3), (mana = 160), status, hasplayed);
    this.spe = "Healing lighting";
    this.actived = false;
  }

  specialMove(victim) {
    this.dmg = 2;
    console.log(`${this.name} claque ${this.spe} sur ${victim.name}`);
    this.dealDamage(victim);
    console.log(`${this.name} se soigne de 4 hp`);
    this.dmg = 4;
    this.hp += 5;
    this.mana -= 40;
  }

  seeSpecialMove() {
    alert(
      `${this.spe}\n- Inflige 2 points à son adversaire.\n- Et se soigne de 5 hp.\n- Utilise 40 points de mana.`
    );
  }
}
