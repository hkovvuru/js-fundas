//Deferred results can be only retrieved via callback functions
var divide = function (errFn, a, b, fn) {
    var result;
    setTimeout(function () {
        try {
            if (b === 0)
                throw 'Cannot divide by Zero';
            result = a / b;
            fn(result);
        } catch (err) {
            errFn(err);
        }
    }, 1000);
    return result;
}

divide(function(err){
    if(err)
    console.log(err);
},25, 0, function (divideResult) {
    console.log(divideResult);
});
