var numbers = [];
numbers.push(1);
numbers.push(100);
numbers.push(10);
numbers.push(2);
numbers.push(1000);
numbers.push(3);
numbers.push(250);
console.log(numbers.length);
numbers.pop();
numbers.splice(numbers.indexOf(100),1);

for (var index = 0; index < numbers.length; index++) {
    var item = numbers[index];
    console.log(item);
}

var printNumber = function(item){
    console.log(item);
};

var sortInAscending = function(a,b){
    return a > b;
};

var sortInDescending = function(a,b){
    return a < b;
};

console.log('Sorting and printing...');
numbers.sort(sortInAscending);
numbers.forEach(printNumber);


Husapeereworeoew