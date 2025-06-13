const obj={
    "name":"Shristy",
    "age":24
}
let objToString=JSON.stringify(obj)
document.writeln(objToString);

let stringToTbj=JSON.parse(value)
document.writeln(stringToTbj.name+" "+stringToTbj.age);