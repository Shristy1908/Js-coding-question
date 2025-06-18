//Check the Palindrome String

let str="noghon";

// let revStr="";
// for(let i=str.length-1;i>=0;i--){
//     revStr=revStr+str[i];
// }
// if(revStr === str){
//     document.writeln("Plaindrome No");
// }
// else{
//     document.writeln("not palindrome No");
// }

//using two pointer technique

function checkPalindrome(str){
   let left = 0;
   let right = str.length-1;

   while(left < right){
       if(str[left] !== str[right]){
           return false;
       }
        left++;
        right--; 
   }
    return true;
}
const checkvalue= checkPalindrome(str);
if(checkvalue==true) document.writeln("Palindrome");
else  document.writeln("not Palindrome")