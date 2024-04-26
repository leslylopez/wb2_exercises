"use strict"

//create a variable for a current hour and greeting
let currentHour = 13;
let greeting = "";

//create an if/else statement to figure out our greeting
//before 10am: good morning; after 10 am but before 5: good afternoon; after 5: good evening

if (currentHour <= 10 ){

    greeting = "Good morning!";
}

else if ( currentHour >10 && currentHour <=17){

    greeting = "Good afternoon!";

} else {
    greeting = "Good Evening!";
}

//display the results in the console
console.log(greeting)