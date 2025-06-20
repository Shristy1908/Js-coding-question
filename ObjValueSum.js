const salaries = {
  John: 100,
  Jane: 200,
  Alice: 300
};

function totalSalaries(){
    let sum=0;
    for(let key in salaries){
        sum+=salaries[key];
    }
    return sum;
}
let salarysum=totalSalaries();
document.writeln(salarysum);