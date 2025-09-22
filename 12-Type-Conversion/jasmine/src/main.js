let digits1 = [1, 7, 3];
let digits2 = [4, 5, 6];

let number1 = Number(digits1.join(''));
let number2 = Number(digits2.join(''));

let twoSum = number1 + number2;

console.log(`Number 1: ${number1}`);
console.log(`Number 2: ${number2}`);
console.log(`Sum: ${twoSum}`);

let luckyInput = 12321;
let luckyInputStr = String(luckyInput);
let reversedStr = luckyInputStr.split('').reverse().join('');
let luckyNumber = luckyInputStr === reversedStr;

console.log(`Is ${luckyInput} a palindrome? ${luckyNumber}`);

let userInput = ''; 
let errorMessage = '';

if (userInput == null || userInput.trim() === '') {
  errorMessage = 'Required field';
} else if (isNaN(Number(userInput)) || Number(userInput) === 0) {
  errorMessage = 'Must be a number besides 0';
} else {
  errorMessage = '';
}

console.log(`Input: "${userInput}" -> Error Message: "${errorMessage}"`);