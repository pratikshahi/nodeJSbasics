//jshint esversion:6      
//to stop warning from jshint telling it we are using newer version ES6

var nameGenerator=require("name-generate");     //external package usning npm
var myNewFirstName=nameGenerator.first();       //first() last() defined inside external package
var myNewlastName=nameGenerator.last();

console.log(myNewFirstName+" "+myNewlastName);

var superVillainName=require("supervillains");
var mySuperVillainName=superVillainName.random();
console.log(mySuperVillainName);