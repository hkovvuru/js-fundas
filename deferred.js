//JS is single Threaded

(function(){
    console.log('1');
    console.log('2');
    //Deferred Execution - Delayed - XHR, User Events, Timers
    setTimeout(function(){
        console.log('5');
    },10);
    setTimeout(function(){
        console.log('6');
    },0);
    console.log('3');
    console.log('4');
    //for(;;){}
})();