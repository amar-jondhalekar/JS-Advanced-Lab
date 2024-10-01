// Regular function : Do not retain access to their reference variables after execution completes 
function regularFunc(){
    let count = 10;
    console.log(count++);
}
regularFunc();
regularFunc();

// Closure function : Closure retain access to their reference variables event after execution completes
function counterFunction(){
    let counter = 0;
    return function(){
        counter++;
        console.log(counter);
    };
}

const closure1 = counterFunction();
// 1. Data Privacy 

closure1();
closure1();