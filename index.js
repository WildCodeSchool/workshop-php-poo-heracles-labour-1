const Fighter = require('./src/fighter');

// création de deux instances de combattants
const heracles = new Fighter('Héraclès', 20, 6, '🧔', '💚');
const lion = new Fighter('Lion de Némée', 11, 13, '🦁', '💙');

// fight !
//while (heracles.life > 0 && lion.life > 0) {}
for (round = 1; (heracles.isAlive && lion.isAlive); round++)
console.log(`round ${round}`);
heracles.fight(lion);
lion.fight(heracles);



//  return `${this.name} ${this.emoji}⚔️${enemy.emoji} ${enemy.name} => ${enemy.emoji}${enemy.heart} ${enemy.life}`;