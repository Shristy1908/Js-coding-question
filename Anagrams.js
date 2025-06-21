let str1="kseeg";
let str2="geeks";

// by sorting approach

// let sortedStr1=str1.split("").sort().join("");
// let sortedStr2=str2.split("").sort().join("");

// if(sortedStr1 === sortedStr2){
//     document.writeln("Anagram");
// }
// else{
//     document.writeln("Not Anagram");
// }


// by frequency counter using obj

function isAnagram(str1,str2){
    
    let freq={};

    if(str1.length !== str2.length) return false;

    for(let char in str1){
        freq[char] = (freq[char] || 0) + 1;
    }

    for(let char in str2){
       if( !freq[char] ) return false;
       freq[char]--;
    }
    return true;
}

let returnedval = isAnagram(str1,str2);
// if(returnedval){
//     document.writeln("Anagram");
// }
// else{
//     document.writeln("Not Anagram");
// }