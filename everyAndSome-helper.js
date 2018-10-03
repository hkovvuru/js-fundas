const computers = [
    { name: 'Apple', ram: 24 },
    { name: 'compaq', ram: 4 },
    { name: 'lenovo', ram: 32 },
];

var allComputersCanRunPrograms = true;
var someComputersCanRunPrograms = false;

for (var i = 0; i < computers.length; i++) {
    if (computers[i].ram > 16) {
        console.log(computers[i].ram + ' it is true');
    }
    else {
        console.log(computers[i].ram + ' it is false ')
    };
}

console.log('******************');

// using every helper
var everyTest = computers.every((computer) => {
 if(computer.ram > 16){
        return true;
    }else{
        return false;
    }
})
console.log(everyTest);

// using some helper
var someTest = computers.some((computer) => {
    if(computer.ram > 16){
        return true;
    }else{
        return false;
    };
})

console.log(someTest);

// sytax of helpers 
console.log('******************')

var names = [ 'hussain', 'khn', 'vivekananda'];


var everyresult = names.every((name) => {
    return name.length > 4
});
console.log(everyresult);

var someResult = names.some((name) => {
     return name.length > 4;
})

console.log(someResult);

console.log('*******************');

function field(value){
    this.value = value;
};

field.prototype.validate = function(){
    return this.value.length > 0;
};

var userName = new field('2cool');
var password = new field('my_password');


// console.log(useName.validate() && password.validate());

var fields = [userName, password];

var result = fields.every((field) => {
    return field.validate();
});
console.log(result);