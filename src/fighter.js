const MAX_LIFE = 100;

class Fighter {
    constructor(name, strength, dexterity, emoji, heart='💜') {
        this.name = name;
        this.emoji = emoji;
        this.strength = strength;
        this.dexterity = dexterity;
        this.heart = heart;
        this.life = MAX_LIFE;
    }
    fight(enemy){
        let hit = Math.trunc(Math.random()*this.strength);
        let wound = hit - this.dexterity;
        wound < 0 ? '' : enemy.life - wound < 0 ? enemy.life = 0 : enemy.life = enemy.life - wound;
        console.log(`${this.name} ${this.emoji}⚔️${enemy.emoji} ${enemy.name} => ${enemy.emoji}${enemy.heart} ${enemy.life}`);
    }
}

module.exports = Fighter;
// export {Fighter} //