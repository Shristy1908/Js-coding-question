const obj={
    name:"Shristy Kumari",
    age:25,
    gender:"female"
}

// using for..in loop 

for(let key in obj){
    document.writeln(key+" : "+obj[key]+"<br>");
}
document.writeln("******************************"+"<br>")

// using Object.key(obj)
Object.keys(obj).forEach(function(key){
    document.writeln(key +": "+obj[key]+"<br>")
})
document.writeln("******************************"+"<br>")

//using Object.values(obj)
Object.values(obj).forEach(function(value){
    document.writeln(value+"<br/>")
})
document.writeln("******************************"+"<br>")

//using Object.enteries(obj)
Object.entries(obj).forEach(function([key, value]){
    document.writeln(`${key} : ${value} <br>`);
})
