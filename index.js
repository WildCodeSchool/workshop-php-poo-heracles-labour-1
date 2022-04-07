// import { Fighter } from "./src/fighter";
const Fighter = require('./src/fighter');

// création de deux instances de combattants
const heracles = new Fighter('Héraclès', 20, 6, '🧔', '💚');
const lion = new Fighter('Lion de Némée', 11, 13, '🦁', '💙');

// fight !
while (heracles.life > 0 && lion.life > 0) {}
heracles.fight(lion);
lion.fight(heracles)
