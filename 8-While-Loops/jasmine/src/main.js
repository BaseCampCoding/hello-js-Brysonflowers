console.log("--- Task 1: Determine How Long It Takes to Mix a Juice ---");

const juiceName = "Tropical Island";
let timeToMixJuiceResult;

// Use an if/else if/else chain to determine the mixing time.
// This is a common alternative to a switch statement.
if (juiceName === "Pure Strawberry Joy") {
  timeToMixJuiceResult = 0.5;
} else if (juiceName === "Energizer" || juiceName === "Green Garden") {
  timeToMixJuiceResult = 1.5;
} else if (juiceName === "Tropical Island") {
  timeToMixJuiceResult = 3;
} else if (juiceName === "All or Nothing") {
  timeToMixJuiceResult = 5;
} else {
  timeToMixJuiceResult = 2.5;
}

console.log(`Juice: "${juiceName}"`);
console.log(`Time to mix: ${timeToMixJuiceResult} minutes`);

// --- Task 2: Replenish the Lime Wedge Supply ---

console.log("\n--- Task 2: Replenish the Lime Wedge Supply ---");

const wedgesNeeded = 25;
const limes = ["small", "large", "large", "medium", "small", "large"];
let wedgesCut = 0;
let limesCut = 0;

for (let i = 0; i < limes.length && wedgesCut < wedgesNeeded; i++) {
  const limeSize = limes[i];
  limesCut++;

  // Determine wedges based on lime size
  switch (limeSize) {
    case "small":
      wedgesCut += 6;
      break;
    case "medium":
      wedgesCut += 8;
      break;
    case "large":
      wedgesCut += 10;
      break;
  }
}

console.log(`Wedges needed: ${wedgesNeeded}`);
console.log("Limes available:", limes);
console.log(`Total limes cut: ${limesCut}`);
console.log(`Total wedges cut: ${wedgesCut}`);

// --- Task 3: Finish Up the Shift ---

console.log("\n--- Task 3: Finish Up the Shift ---");

const timeLeft = 7;
const orders = ["Pure Strawberry Joy", "Energizer", "Pure Strawberry Joy", "Tropical Island", "All or Nothing", "Green Garden", "All or Nothing"];
let timeSpent = 0;
let remainingOrders = [];

for (let i = 0; i < orders.length; i++) {
  const currentJuice = orders[i];
  let mixTime;

  // Re-use the logic from Task 1 to determine the mixing time
  if (currentJuice === "Pure Strawberry Joy") {
    mixTime = 0.5;
  } else if (currentJuice === "Energizer" || currentJuice === "Green Garden") {
    mixTime = 1.5;
  } else if (currentJuice === "Tropical Island") {
    mixTime = 3;
  } else if (currentJuice === "All or Nothing") {
    mixTime = 5;
  } else {
    mixTime = 2.5;
  }

  // Check if Li Mei has time to start the current juice
  if (timeSpent + mixTime <= timeLeft) {
    timeSpent += mixTime;
  } else {
    // If she can't start it, add all remaining orders to the list
    remainingOrders = orders.slice(i);
    break; // Exit the loop since she won't start any more orders
  }
}

console.log(`Time left in shift: ${timeLeft} minutes`);
console.log("Incoming orders:", orders);
console.log(`Juices finished: ${orders.length - remainingOrders.length}`);
console.log("Remaining orders for next shift:", remainingOrders);
