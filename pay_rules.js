//give better errors related to our code ( for example not using variables that )

"use strict"

// input variables for calculations

//this is the hourly rate for the employee
let payRate = 25;
let hoursWorked = 40;

//determine how many hours are normal hours vs overtime hours
 
let regularHours = 0;
let overTimeHours = 0;

//if the hours are greater than 40, we know they worked overtime
if (hoursWorked > 40) {
//this is where we need to figure out overtime hours

regularHours = 40;
overTimeHours = hoursWorked - regularHours;


} else {
// code for people who didn't work overtime

regularHours = hoursWorked

}

// create some variables to represent the normal pay and the overtime pay

let normalPay = payRate * regularHours;
let overtimePay = ((1.5*payRate) * overTimeHours);

//figure out what we got pay after normal and overtime hours (pay before taxes)
let grossPay = normalPay + overtimePay

console.log ("I got paid $ " + normalPay + " for my regural hours");
console.log ("I got paid $ " + overtimePay + " for my overtime hours ");
console.log (" I got paid $ " + grossPay.toFixed(2) + " for my gross pay ");

