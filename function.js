//Variable can be assigned with Function
var sayHi = function(name){
    console.log('Hi '+name);
};
console.log(typeof(sayHi));

//Explicitly invoking the fuction
sayHi('Karthik');

//Self Invoking Function
(function(name){
    console.log('Hi '+name);
})('Karthik');

//Function returns another function (Nested Function)
var add = function(a){
    return function(b){
        return a + b;
    }
}

console.log(add(5)(6));


var printData = function(data){
    console.log(data);
}

var sample = function(fn){
    //local variable
    var info = 'Information inside sample function';    
    fn(info);
}

//HOF - Higher order Function
sample(printData);