//From an array of objects, return total price of items costing more than ₹1000

const items = [
  { name: 'Phone', price: 1200 },
  { name: 'Mouse', price: 800 },
  { name: 'Monitor', price: 3000 }
];

let sum = items.filter((item)=>(item.price > 1000)).map((item)=>item.price).reduce((sum,price)=>(sum+price),0);

document.writeln(sum);

// for(let ele of ArrObj){
//     document.writeln(ele.name+" "+ele.price);
// }
