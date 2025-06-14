let nested = [[1, 2], [3, 4,5,[5,8,10]], 5,[5]];
// Expected output: [1, 2, 3, 4, 5]

function flattenArr(arr){
    let result = [];
    for(let item of arr){
        if(Array.isArray(item)){
            result=result.concat(flattenArr(item));
        }
        else{
            result.push(item)
        }
    }
    return result;
}
nested=flattenArr(nested)
document.writeln(nested)