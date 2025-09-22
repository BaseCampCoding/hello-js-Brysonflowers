/*



*/





// Given state variables
let knightIsAwake = true;
let archerIsAwake = false;
let prisonerIsAwake = true;
let petDogIsPresent = true;

// Task 1: Fast Attack Availability
let canExecuteFastAttack = !knightIsAwake;
console.log("Can Annalyn make a fast attack?", canExecuteFastAttack);

// Task 2: Spy Availability
let canSpy = knightIsAwake || archerIsAwake || prisonerIsAwake;
console.log("Can Annalyn spy on the camp?", canSpy);

// Task 3: Signal Prisoner Availability
let canSignalPrisoner = prisonerIsAwake && !archerIsAwake;
console.log("Can Annalyn signal the prisoner?", canSignalPrisoner);

// Task 4: Free Prisoner Availability
let canFreePrisoner = (petDogIsPresent && !archerIsAwake) || (!petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake);
console.log("Can Annalyn free the prisoner?", canFreePrisoner);
