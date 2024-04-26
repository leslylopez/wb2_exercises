"use strict"

// input variables for calculations

//this is the hourly rate for the employee
let payRate = 17.3;
let hoursWorked = 45;

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
let overtimePay = ((1.5 * payRate) * overTimeHours);


//figure out what we got pay after normal and overtime hours (pay before taxes)
let grossPay = normalPay + overtimePay
let annualGrossPay = grossPay * 52;

let taxfileType = "joint";
let taxRate = 0;

if (taxfileType.toLowerCase === "joint") {
    //we are filing a joint return

    if (annualGrossPay < 12000) {
        taxRate = 0;

    }
    else if (annualGrossPay < 2500) {
        taxRate = 6;
    }
    else if (annualGrossPay < 75000) {
        taxRate = 11;
    }
    else {
        taxRate = 20;
    }

}

else {

    if (annualGrossPay < 12000) {
        taxRate = 5;

    }
    else if (annualGrossPay < 2500) {
        taxRate = 10;
    }
    else if (annualGrossPay < 75000) {
        taxRate = 15;
    }
    else {
        taxRate = 20;
    }


}

let taxAmount = grossPay * (taxRate/100) 
let afterTaxes = grossPay - taxAmount

console.log(`You worked ${hoursWorked} hours this pay period`);
console.log(`because you earned $ ${payRate.toFixed(2)} per hour, your gross pay is $${grossPay}`);
console.log(`Your filing status is ${taxfileType}`);
console.log (`your tax withholdings this period is ${taxAmount}`);
console.log (`Your net pay is ${afterTaxes.toFixed(2)}`);
