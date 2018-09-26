var employee={}; // Associative Array. It has key and value pairs
employee.id = 108331;//Attaching Property(Key) to employee object
employee['name'] = 'Karthik'; //Another way to attach property

console.log(employee.id);
console.log(employee['name']); //recommended

//To iterate the properties of an object
for (var prop in employee) {
   console.log('Key : '+prop+' Value : '+employee[prop]);
}
