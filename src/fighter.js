const MAX_LIFE = 100;

class Fighter {
    constructor(name, strength, dexterity, emoji='👹', heart='💜') {
        this.name = name;
        this.emoji = emoji;
        this.strength = strength;
        this.dexterity = dexterity;
        this.heart = heart;
        this.life = MAX_LIFE;
    }
    getRandomInt(max){
        return 1 + Math.floor(Math.random() * max);
    }

    fight(enemy){
        const hit = this.getRandomInt(this.strength);
      // const wound = hit - this.dexterity;
      const wound = Math.max(hit - enemy.dexterity, 0);
      //  wound < 0 ? '' : enemy.life - wound < 0 ? enemy.life = 0 : enemy.life = enemy.life - wound;
      enemy.life = Math.max(enemy.life - wound, 0);
      return `${this.name} ${this.emoji}🗡️${enemy.emoji} ${enemy.name} => ${enemy.emoji}${enemy.heart} ${enemy.life}`
    }

    isAlive() {
        return this.life > 0;
}
}

module.exports = Fighter;
// export {Fighter} //
