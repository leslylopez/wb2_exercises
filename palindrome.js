"use strict"
let word = "wow";

//reversed the word
let characters = word.split('')
let reversedCharacters = characters.reverse();
let reversedWord = reversedCharacters.join ('');

//if word matched reversed word
if (word === reversedWord){

console.log ("True");

//if word did not match reversed word
}   else {

word !== reversedWord;

console.log ("False");

}
