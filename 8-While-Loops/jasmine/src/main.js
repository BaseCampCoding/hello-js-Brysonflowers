const juiceName = 'All or Nothing';
let timeToMixJuiceResult;

//I used a switch statement because they are better for this use case
switch (juiceName) {
  case 'Pure Strawberry Joy':
    timeToMixJuiceResult = 0.5;
    break;
  case 'Energizer':
  case 'Green Garden':
    timeToMixJuiceResult = 1.5;
    break;
  case 'Tropical Island':
    timeToMixJuiceResult = 3;
    break;
  case 'All or Nothing':
    timeToMixJuiceResult = 5;
    break;
  default:
    timeToMixJuiceResult = 2.5;
    break;
}

//:)

console.log(`(Task 1) Time to mix "${juiceName}": ${timeToMixJuiceResult} minutes.`);
console.log('---');

const wedgesNeeded = 25;
const limes = ['small', 'large', 'large', 'medium', 'small'];
let wedgesCut = 0;
let limesCut = 0;

while (wedgesCut < wedgesNeeded && limesCut < limes.length) {
  const limeSize = limes[limesCut];
  switch (limeSize) {
    case 'small':
      wedgesCut += 6;
      break;
    case 'medium':
      wedgesCut += 8;
      break;
    case 'large':
      wedgesCut += 10;
      break;
  }
  limesCut++; 
}

console.log(`(Task 2) Wedges needed: ${wedgesNeeded}`);
console.log(`(Task 2) Limes available: [${limes.join(', ')}]`);
console.log(`(Task 2) Number of limes to cut: ${limesCut}`);
console.log('---');



const timeLeft = 5;
const orders = ['Energizer', 'Green Garden', 'Tropical Island', 'Pure Strawberry Joy'];
let timeSpent = 0;
let ordersProcessed = 0;

// A while loop to process orders as long as Li Mei has time to start a new one.
while (timeSpent < timeLeft && ordersProcessed < orders.length) {
  const currentOrder = orders[ordersProcessed];
  let timeForCurrentOrder;

  switch (currentOrder) {
    case 'Pure Strawberry Joy':
      timeForCurrentOrder = 0.5;
      break;
    case 'Energizer':
    case 'Green Garden':
      timeForCurrentOrder = 1.5;
      break;
    case 'Tropical Island':
      timeForCurrentOrder = 3;
      break;
    case 'All or Nothing':
      timeForCurrentOrder = 5;
      break;
    default:
      timeForCurrentOrder = 2.5;
      break;
  }

  timeSpent += timeForCurrentOrder;
  ordersProcessed++;
}

const remainingOrders = orders.slice(ordersProcessed);

console.log(`(Task 3) Time left in shift: ${timeLeft} minutes`);
console.log(`(Task 3) Today's orders: [${orders.join(', ')}]`);
console.log(`(Task 3) Remaining orders: [${remainingOrders.join(', ')}]`);