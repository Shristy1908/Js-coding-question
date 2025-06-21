let arr=[2,6,3,5,7];

let len=arr.length + 1;
let max=Math.max(...arr);
let min=Math.min(...arr);

let expectedSum=((max+min)*len)/2;
let currsum=arr.reduce((acc,curr)=>(acc+curr),0);

let missingEle=expectedSum-currsum;
document.writeln(missingEle);
