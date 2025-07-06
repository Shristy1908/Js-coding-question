// Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.
let arr1=[1,2,3,4];
let arr2=[1,4,9,19];
let flag=true
function SqurArr(arr1,arr2){
    if(arr1.length != arr2.length ){
        return false;
    }
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]*arr1[i]!=arr2[i]){
            flag=false
        }
    }
    return flag;
}

console.log(SqurArr(arr1,arr2));