//Mind before going over it

let dayRate = 480;

let budget = 960;
let workdays = budget / dayRate;

let projectDays = 34;
let workdaysPerMonth = 21;
let fullMonths = Math.floor(projectDays / workdaysPerMonth);
let remainingDays = projectDays % workdaysPerMonth;

let monthlyRate = dayRate * 20; 
let discount = 0.12;
let discountedMonthlyRate = monthlyRate * (1 - discount);

let remainingDaysCost = remainingDays * dayRate;
let totalProjectCost = (fullMonths * discountedMonthlyRate) + remainingDaysCost;


// the other one

/*let ratePerHor = 60
  let dayRate = ratePerHour * 8;
  
  let budget = 1000
  let workdays = Math.floor(budget / dayRate);
  
  let billable = 22
  let fullMonths = Math.floor(35 / billable);
  let remainingDays = 35 % billable
  let monthlyDiscount = (billable * dayRate) * 0.2
  
  let discountedMonthlyRate = billable * dayRate - monthlyDiscount
  let remainingCost = remainingDays * dayRate
  let remainingCost = remainingDays * dayRate
  */
