// arrays

const myArr = [0, 1, 2, 3, 4]
const myHeros = ["ironman", "spiderman","captainAmarica"]

const myArr2 = new Array(1, 2, 3, 4, 5, 4)

console.log(myArr[3]);

// Array method 

// myArr.push(8)
// myArr.push(2)
// myArr.pop()
// myArr.unshift(55)
// myArr.shift()
// console.log(myArr.includes(4));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);

