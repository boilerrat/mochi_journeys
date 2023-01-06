const fs  = require("fs");

const lines = fs.readFileSync(`${__dirname}/input`).toString().split('\n'); // Split the input string into an array of lines

let currentElf = 0; // Keep track of the current Elf
let elfCalories = {}; // An object to store the total Calories for each Elf

for (const line of lines) {
  if (line === "") {
    // If the line is empty, we know that we are starting a new Elf's inventory
    currentElf++;
  } else {
    // Otherwise, we are processing a food item for the current Elf
    if (!elfCalories[currentElf]) {
      // If this is the first food item for this Elf, initialize the total Calories to 0
      elfCalories[currentElf] = 0;
    }
    elfCalories[currentElf] += Number(line); // Add the Calories from the food item to the total
  }
}

// Find the Elf with the most Calories
let maxCalories = 0;
let elfWithMaxCalories;
for (const elf in elfCalories) {
  if (elfCalories[elf] > maxCalories) {
    maxCalories = elfCalories[elf];
    elfWithMaxCalories = elf;
  }
}

console.log(`Elf ${elfWithMaxCalories} has the most Calories with a total of ${maxCalories}.`);

// answer is Elf 41 carrying 69795
// ChatGPT Aided in this code
