function counterFunc(){
    let count = 0;

    return function(){
        count++;
        console.log(count);
    };
}

const closure1 = counterFunc();
// Data Privacy 
closure1();
closure1();

// how to release variable reference or closures from memory

closure1 = null;