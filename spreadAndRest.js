const arr1=[1,2,3,4,5];
const arr2=[6,7,8,9,10];

//spread operator
const sum=[...arr1,...arr2];
document.writeln(sum+"<br/>");

//rest operator
const [first,...rest]=arr1;
document.writeln(first+"<br> "+rest);