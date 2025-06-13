// object literals

let obj={
    name: "Shristy Kumari",
    age:24,  
}
document.writeln(obj.name+" "+obj.age);


// using new Object constructor

let obj1=new Object();

obj1.name="Shruti Kumari";
obj1.age=25;
document.writeln(obj1.name+" "+obj1.age);


//using constructor function

function User(name,age){
    this.name=name;
    this.age=age;
}
const obj2=new User("Madhu",26);
document.writeln(obj2.name+" "+obj2.age);


//using Object.create()

const student={
    name:"Shristy",
    study(){
        console.log("student studying")
    }
}
const s1=new Object.create(student);
s1.age=24;


//using ES6 class syntax

class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
const s1=new Student("Shristy",25);
