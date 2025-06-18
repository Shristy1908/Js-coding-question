let str="Shristy";

//using split(), reverse(), join()

let reversedStr= str.split("").reverse().join("");
document.writeln(reversedStr+ "<br>");

// using for loop
let revStr="";
for(let i=str.length-1; i>=0; i--){
   revStr=revStr+str[i];
}
document.writeln(revStr)

//using recursion

function reverseStr(str){
    if(str === ""){
        return "";
    }
    return reverseStr(str.slice(1))+str[0];
}

document.writeln( reverseStr(str))
