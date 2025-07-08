let arr1=[1,2,2,1,3,6];
let arr2=[2,1,1,2];
function intersection(arr1, arr2) {
  const set1 = new Set(arr1);
  console.log(set1);
  
  const set2 = new Set(arr2);
  return [...set1].filter((item) => set2.has(item));
}

console.log(intersection(arr1,arr2))