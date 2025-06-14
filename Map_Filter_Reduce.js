const arr=[1,2,3,4];

//Given an array of numbers, return a new array with each number squared.
const sqrdArr=arr.map((num)=>(
    num*num
))

// document.writeln(sqrdArr);

let nums = [1, 2, 3, 4, 5, 6];
// Expected output: [2, 4, 6]

nums=nums.filter((num)=>(
    num%2===0
))
// document.writeln(nums);

let fruits = ["apple", "banana", "cherry"];
// Expected output: ["APPLE", "BANANA", "CHERRY"]
fruits=fruits.map((fruit)=>(
    fruit.toUpperCase()
))
document.writeln(fruits);
