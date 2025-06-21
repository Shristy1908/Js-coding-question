let arr=[2,5,4,1,7,3,6,8,7];

let max=arr[0];
let secMax=0;

for(let ele of arr){
    if(ele > max){
        secMax = max;
        max = ele;
    }
    else if(ele > secMax && ele != max){
        secMax = ele;
    }
}

document.writeln(secMax);