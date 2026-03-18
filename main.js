
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

// A loop that runs 5 times (searching 5 corners of a room)
for (let search = 1; search <= 5; search = search + 1) {
  console.log(`Searching corner ${search}...`);
  
  // Every 2nd corner has 50 gold (The Modulo intuition from Ch 1!)
  if (search % 2 === 0) {
    goldFound = goldFound + 50;
    console.log("Found 50 gold!");
  }
}

console.log(`Total gold looted: ${goldFound}`);


let heroClass = "Sorceress";

switch (heroClass) {
  case "Barbarian":
    console.log("Strength and Honor! You wield an Axe.");
    break;
  case "Sorceress":
    console.log("Magic flows through you! You wield a Staff.");
    break;
  case "Necromancer":
    console.log("The dead obey! You wield a Scythe.");
    break;
  default:
    console.log("A mysterious traveler arrives...");
    break;
}

let legendaryItem = "Excalibur";

switch (legendaryItem) {
    case "Excalibur":
        console.log("The legendary sword of King Arthur!");
        break;
    case "Mjolnir":
        console.log("The mighty hammer of Thor!");
        break;
    case "Gungnir":
        console.log("The unerring spear of Odin!");
        break;

        case "Aegis":
        console.log("The indestructible shield of Zeus!");
        break;

        case "Trident":
        console.log("The powerful trident of Poseidon!");
        break;
};

const heroName2 = "Aria";

let hp = 100;

for (let Combat = 1; Combat <= 3; Combat++ ) {

  console.log(`Round Complete ${Combat}!`);

  const Question = prompt(" Round 1: Do you Attack or block?");
    if (Question === "block") {
        console.log("You have taken 0 damage!");
    } else if (Question === "Attack") {
        console.log("You have taken 10 damage!");

        hp = hp - 20;
    }

if (hp > 0) {

console.log(`Victory!,  ${heroName2} Survives with ${hp} HP left!`);

}

else{
    console.log(`Defeat!, ${heroName2} has fallen in battle!`);
}
}

