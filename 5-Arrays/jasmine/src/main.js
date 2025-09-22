// A starting stack of cards, numbered 1 to 10.
let stack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Initial Stack:", stack);

// Task 1: Retrieve a Card from the Stack
let position = 2;
let getItemResult = stack[position];
console.log(`\nTask 1: The card at position ${position} is:`, getItemResult);

// Task 2: Exchange a Card in the Stack
let replacementCard = 11;
stack[position] = replacementCard;
console.log(`\nTask 2: Stack after exchanging a card at position ${position}:`, stack);

// Task 3: Insert a Card at the Top of the Stack
let newCardTop = 0;
stack.unshift(newCardTop);
console.log("\nTask 3: Stack after inserting a new card at the top:", stack);

// Task 4: Remove a Card from the Stack
let removePosition = 4;
stack.splice(removePosition, 1);
console.log(`\nTask 4: Stack after removing a card from position ${removePosition}:`, stack);

// Task 5: Remove the Top Card from the Stack
stack.shift();
console.log("\nTask 5: Stack after removing the top card:", stack);

// Task 6: Insert a Card at the Bottom of the Stack
let newCardBottom = 12;
stack.push(newCardBottom);
console.log("\nTask 6: Stack after inserting a new card at the bottom:", stack);

// Task 7: Remove a Card from the Bottom of the Stack
stack.pop();
console.log("\nTask 7: Stack after removing the bottom card:", stack);

// Task 8: Check the Size of the Stack
let stackSize = 10;
let checkSizeOfStackResult = stack.length === stackSize;
console.log(`\nTask 8: Does the stack size equal ${stackSize}?`, checkSizeOfStackResult);
