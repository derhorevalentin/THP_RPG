class Fighter extends Character {
  constructor(name, hp, dmg, mana, status, hasplayed) {
    super(name, (hp = 12), (dmg = 4), (mana = 40), status, hasplayed);
    this.spe = "Dark vision";
    this.actived = false;
  }

  specialMove(victim) {
    this.dmg = 5;
    console.log(`${this.name} claque ${this.spe} sur ${victim.name}`);
    this.dealDamage(victim);
    this.dmg = 4;
    this.activated = true;
  }

  watchSpecialMove() {
    alert(
      `${this.spe}\n- Attaque infligeant 5 dégâts. Jusqu'au prochain tour.\n- Chaque coup reçu lui infligera -2 dégâts en moins. Elle coute 20 mana.`
    );
  }

  takeDamage(damage) {
    if (this.speactivated == true) {
      damage -= 2;
      this.hp -= damage;
      console.log(
        `${this.name} claque ${this.spe}, il attaque et défend. \n${this.name} encaisse ${damage} points de dégat. \n${this.name} à ${this.hp} hp.`
      );
    } else {
      this.hp -= damage;
      console.log(
        `${this.name} prend ${damage} points de dégats. \n${this.name} à ${this.hp} hp.`
      );
    }
  }

  resetSpe() {
    this.speactivated = false;
  }
}
