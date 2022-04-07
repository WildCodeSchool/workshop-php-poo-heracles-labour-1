const Fighter = require('./src/fighter');

// création de deux instances de combattants
const heracles = new Fighter('Héraclès', 20, 6, '🧔', '💚');
const lion = new Fighter('Lion de Némée', 11, 13, '🦁');

/**
 * Helper to produce the result of a round
 */
const roundDisplay = (attacker, enemy) => {
    return enemy.wound === 0 ?
    `${attacker.name} ${attacker.emoji}🗡️${enemy.emoji} ${enemy.name} => ${enemy.emoji}🛡️`
    :
    `${attacker.name} ${attacker.emoji}🗡️${enemy.emoji} ${enemy.name} => ${enemy.emoji}:` + (enemy.life > 0 ? ` ${enemy.life}${enemy.heart}` : `💀`);
};

/**
 * Helper to dispatch fighters between winner and loser
 */
const score = (attacker, enemy) => {
    return attacker.isAlive() ? {
        winner: attacker,
        loser: enemy,
    } : {
        winner: enemy,
        loser: attacker
    };
};

let round = 1;

while (heracles.isAlive() && lion.isAlive()) {
    console.log(`⏳ Round #${round}`);

    heracles.fight(lion);
    console.log(roundDisplay(heracles, lion));
    if (lion.life>0) {
        lion.fight(heracles);
        console.log(roundDisplay(lion, heracles));
    }

    round++;
}

const result = score(heracles, lion);

console.log(`💀 ${result.loser.name} est mort`);
console.log(`🏆 ${result.winner.name} gagne (Reste ${result.winner.life}${result.winner.heart})`);