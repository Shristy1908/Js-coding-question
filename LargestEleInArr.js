let arr=[2,4,6,8,1,3];

//  let max = Number.MIN_VALUE;
let max = arr[0];
for(let i of arr){
   
    if(i>max){
        max=i;
    }
}

document.writeln(max);