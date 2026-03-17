
const gold = 150;

console.log("You have " + gold + " gold pieces.");

prompt("What is your name?");

confirm("Are you sure you want to do this?");

console.log(confirm);

console.log(prompt);

let goldCOIN = Number(prompt("How much gold do you have?"));

if (goldCOIN > 100) {
  console.log("You buy the Enchanted Blade!");
}

if (goldCOIN < 100) {
  console.log("You don't have enough gold to buy the Enchanted Blade.");
}

else {
  console.log("You have exactly 100 gold pieces, you can buy the Enchanted Blade!");
}

