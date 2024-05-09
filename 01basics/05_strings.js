const name = "Emon"
const repoCount = 50

//console.log(name + repoCount + "Value");

console.log(`hello my name is ${name} and my repo coun is ${repoCount}`);

const gameName = new String('Emon-naaa')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('E'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherSring = gameName.slice(-8,4)

console.log(anotherSring);

const newStringOne = "   Emon    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://adadad.com/adadada%20adaddaa"


console.log(url.replace('%20','-'));
console.log(url.includes('dhghdfh'));

console.log(gameName.split('-'));