//Task 1
let kind = "car"
let needslicenseResult;

if(kind === 'car' || kind === 'truck'){
    needslicenseResult = true
}
else{
    needslicenseResult = false
}

//Task 2
let option1 = 'Toyota';
let option2 = "Honda";

let chooseVehicleResult;
if (option1 > option2) {
    chooseVehicleResult = option2 + "is clearly the better choice"
}
else{
    chooseVehicleResult = option1 + "is clearly the better choice"
}

//task 3
let orginalPrice = 10000
let age = 5
let calulateResellPriceResult;

if(age < 3) {
    calculateResellPriceResult = originalPrice * - 0.8;

}
else if(age > 10){
    calulateResellPriceResult = orginalPrice * 0.5;
}
else if(age >= 3 && age < 10){
    calulateResellPriceResult = orginalPrice * 0.7;
}

console.log();
