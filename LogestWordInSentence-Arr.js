// Program to find longest word in a given sentence ?

// sentence - A plane crashed at Ahmedabad, why it happened and what our government is doing?

// let str="A plane crashed at Ahmedabad, why it happened and what our government is doing?";
let arr = ["A plane crashed at Ahmedabad, why it happened and what our government ighgjhjkhkhjkhkhkhkhs doing?"];

function MaxLen(arr){
     let splittedEle;
     let max="";
    
     for(let i=0;i<arr.length;i++){
        splittedEle=arr[i].split(" ");
        max=splittedEle[0];
        for(let i=0;i<splittedEle.length;i++){
            if(splittedEle[i].length > max.length){
                max=splittedEle[i];
            }
        }
     }
     return max;
}
console.log(MaxLen(arr));