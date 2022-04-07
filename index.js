// import { Fighter } from "./src/fighter";
const Fighter = require('./src/fighter');

// création de deux instances de combattants
const heracles = new Fighter('Héraclès', 20, 6, '🧔', '💚');
const lion = new Fighter('Lion de Némée', 11, 13, '🦁', '💙');

// fight !
heracles.fight(lion)