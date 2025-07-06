// Return the first non-repeating character from a string. If all repeat, return '_'.

// Input: "aabbbbcdd" 
// Output: "c"

// Input: "aabbcc"
// Output: "_"
let str="abbcca";

function returnNonRepeat(str){
    for(let i =0;i<str.length;i++){
    let flag=false;
    for(let j=0;j<str.length;j++){
        if(i!=j){
            if(str[i]==str[j]){
                flag=true;
            }
        }
    }
    if(flag==false){
        return str[i];
    }
   }
    return "-"
}
console.log(returnNonRepeat(str));