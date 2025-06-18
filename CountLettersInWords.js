//Write a function to convert "abbbccdddeeee" into "1a3b2c3d4e"

let str = "abbbccdddeeee";

function countStr(str){
   let count=1;
   let result="";

    if(str.length === 0){
        return ""
    }
    for(let i=1;i<=str.length;i++){
        if(str[i] === str[i-1]){
            count++;
        }
        else{
            result=result+count+str[i-1];
            count=1;
        }
    }

     return result;
}

let countOfStr = countStr(str);
document.writeln(countOfStr);