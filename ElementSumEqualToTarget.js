let arr=[2,3,6,5,3,7];
let target=9;

//broute force solution
// for(let i=0; i<arr.length; i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]+arr[j] === target){
//             document.writeln(`(${arr[i]},${arr[j]})`)
//         }
//     }
// }


//using set
let set=new Set();
for(let ele of arr){
   let complement=target - ele;  // 7 6 3 4 
   if(set.has(complement)){
     document.writeln(`Pair: (${complement}, ${ele})`);
   }
   set.add(ele);
}
