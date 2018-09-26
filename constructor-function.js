/*Constructor Function  - Alternative to Class in OOP*/
var Employee = function(id,name){
    this.id = id;
    this.name = name;
    //return this;//It returns current instance by default
}

var employeeOne = new Employee(1,'Karthik');
var employeeTwo = new Employee(2,'Ganesh');
var employees = [employeeOne,employeeTwo];
console.log(employeeOne);
console.log(employees);

console.log(employeeOne instanceof Employee);


