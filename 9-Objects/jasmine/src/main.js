let scoreBoard = {
  "The Best Ever": 1000000,
};
console.log("After Task 1:", scoreBoard);



let newPlayerName1 = "Ada Lovelace";
let newPlayerScore1 = 999999;
scoreBoard[newPlayerName1] = newPlayerScore1;

let newPlayerName2 = "Grace Hopper";
let newPlayerScore2 = 950000;
scoreBoard[newPlayerName2] = newPlayerScore2;
console.log("After Task 2:", scoreBoard);



let playerToRemove = "Ada Lovelace";
delete scoreBoard[playerToRemove];
console.log("After Task 3:", scoreBoard);



let playerNameToUpdate = "The Best Ever";
let scoreToAdd = 1;
scoreBoard[playerNameToUpdate] += scoreToAdd;
console.log("After Task 4:", scoreBoard);



let mondayBonus = 100;
for (const player in scoreBoard) {
  if (Object.prototype.hasOwnProperty.call(scoreBoard, player)) {
    scoreBoard[player] += mondayBonus;
  }
}
console.log("After Task 5:", scoreBoard);