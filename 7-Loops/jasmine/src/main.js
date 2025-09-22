// Task 1: Determine the Total Number of Birds Counted So Far
const birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
let total = 0;

for (let i = 0; i < birdsPerDay.length; i++) {
  total += birdsPerDay[i];
}
console.log(`Total birds counted: ${total}`);

// Task 2: Calculate the Number of Visiting Birds in a Specific Week
const week = 2; // Check the count for the second week
const daysPerWeek = 7;

const weekStart = (week - 1) * daysPerWeek;
const weekEnd = week * daysPerWeek;
let weekTotal = 0;

for (let i = weekStart; i < weekEnd && i < birdsPerDay.length; i++) {
  weekTotal += birdsPerDay[i];
}
console.log(`Total birds for week ${week}: ${weekTotal}`);

// Task 3: Fix a Counting Mistake
// The mistake is that the count for every other day (starting with the first day) is off by one.
for (let i = 0; i < birdsPerDay.length; i += 2) {
  birdsPerDay[i]++;
}
console.log("Birds per day after fixing the mistake:", birdsPerDay);
