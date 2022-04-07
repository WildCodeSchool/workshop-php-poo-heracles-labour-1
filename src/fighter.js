const MAX_LIFE = 100;

class Fighter {
    constructor(name, strength, dexterity, emoji='👹', heart='💜') {
        this.name = name;
        this.emoji = emoji;
        this.strength = strength;
        this.dexterity = dexterity;
        this.heart = heart;
        this.life = MAX_LIFE;
        this.wound = 0;
    }
    getRandomInt(max){
        return 1 + Math.floor(Math.random() * max);
    }

    fight(enemy){
      const hit = this.getRandomInt(this.strength);
      // const wound = hit - this.dexterity;
      enemy.wound = Math.max(hit - enemy.dexterity, 0);
      enemy.life = Math.max(enemy.life - enemy.wound, 0);
      // let result = (wound === 0 ? `${this.emoji}🛡️` : (enemy.isAlive ? `Victoire de ${this.name}: 💀${enemy.emoji}` :`${enemy.emoji}${enemy.heart}: ↘${enemy.life}`));
      //  wound < 0 ? '' : enemy.life - wound < 0 ? enemy.life = 0 : enemy.life = enemy.life - wound;
      
      // return `${result}`
    }

    isAlive() {
        return this.life > 0;
}
}

module.exports = Fighter;
// export {Fighter} //
