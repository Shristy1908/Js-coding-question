let arr=[21,56,2,57,34,58,21];
let low=51;
let high=60;
let result=[];

for(let i=low; i<=high; i++){
    for(let j=0;j<arr.length;j++){
        if(i == arr[j]){
            result.push(i);
        }
    }
}
document.writeln(result)