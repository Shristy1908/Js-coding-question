
let str="jlleftetcc"

// function nonRepeating(str){
//     for(let i=0;i<str.length;i++){
//     // let nonRepChar
//     let flag=false;
//       for(let j=0;j<str.length;j++){
//          if(i!=j){
//              if(str[i] === str[j]){
//                 flag=true; 
//              }
//          }
//       }
//       if(flag==false){
//           return str[i];
//       }
//    }
//    return null;
// }

// console.log(nonRepeating(str))

let countchar={};

for(let ch of str){
   if(countchar[ch]){
      countchar[ch]=countchar[ch]+1
   }
   else{
      countchar[ch]=1;
   }
}
for(let ch of str){
   if(countchar[ch]==1){
      document.writeln(ch);
      break;
   }
}