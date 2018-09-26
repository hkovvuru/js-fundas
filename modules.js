//IIFE - Immediately invoking Function Expression

/*Revealing Module Pattern*/
var Calculator = (function(){

    var privateAddMethod = function(a,b){
        return a + b;
    }

    var privateMultiplyMethod = function(a,b){
        return a * b;
    }

    return {
        add:privateAddMethod,
        multiply:privateMultiplyMethod
    };
})();


console.log(Calculator.add(5,6));