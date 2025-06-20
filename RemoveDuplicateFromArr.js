let arr=[2,5,1,5,3,1,2];

// using Set
// let uniqueArr=[...new Set(arr)];
// document.writeln(uniqueArr);

// using filter
let uniqueArr=arr.filter((ele,index)=>(
    arr.indexOf(ele) === index
))

document.writeln(uniqueArr);