//primitive

// 7 types : string, number, boolean, null, undefined, symbol, bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;




//console.log(id === anotherId);

const BigNumber = 12312312313131313123131n

// reference (non primitive)

// arrays, objects, functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj ={
    name: "Emon",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof BigNumber);

/*************memories ********************/

// stack(primitive) , heap(non-primitive)

let myYoutubename = "emonyoutube"

let anotherName = myYoutubename

anotherName = "yoooooooooooo"

console.log(anotherName);
console.log(myYoutubename);

let userOne = {
    email: "adasdadada@gmail.com",
    bkash: "123412412414"
}

let userTwo = userOne

userTwo.email = "123412341@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);