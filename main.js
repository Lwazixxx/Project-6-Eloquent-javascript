
const gold = 150;

console.log("You have " + gold + " gold pieces.");

prompt("What is your name?");

confirm("Are you sure you want to do this?");

console.log(confirm);

console.log(prompt);

let goldCOIN = Number(prompt("How much gold do you have?"));

if (goldCOIN < 10) {
  console.log("You buy the Enchanted Blade!");
}

if (goldCOIN > 100) {
  console.log("You don't have enough gold to buy the Enchanted Blade.");
}

else {
  console.log("You have exactly 100 gold pieces, you can buy the Enchanted Blade!");
}

const maxGold = Math.max(2, 4);

// 1. The Environment asks a question (Expression)
let level = Number(prompt("Enter your level to pass the gate:"));

// 2. The Decision (Control Flow Statement)
if (level >= 10) {
  console.log("The guard bows. 'Welcome, Champion.'");
}

if (level < 10) {
  console.log("The guard laughs. 'Begone, peasant! You are too weak.'");
}

let monsterHP = 30;

while (monsterHP > 0) {
  console.log(`The skeleton has ${monsterHP} HP left. You strike!`);
  monsterHP = monsterHP - 10; // Reducing the value
}

console.log("The skeleton shatters into dust!");

let energy = 0;

do {
  console.log("You attempt a heavy strike...");
  energy = energy - 10;
} while (energy > 0);

// Result: It prints "You attempt a heavy strike" once, even though energy was 0!

for (let strike = 1; strike <= 3; strike = strike + 1) {
  console.log(`Strike #${strike}!`);
}
// → Strike #1!
// → Strike #2!
// → Strike #3!

for (let arrow = 1; arrow <= 10; arrow = arrow + 1) {
  if (arrow === 5) {
    console.log("Out of arrows! Retreat!");
    break; // This snaps the loop immediately
  }
  console.log(`Fired arrow ${arrow}`);
}
