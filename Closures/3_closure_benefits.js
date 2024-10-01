// Benefits of closures 
function counter(){
    let count = 0;

     return function(){
         count++;
         console.log(count);
     };
 }
 // 1. Data Privacy and Encapsulation 
 const closure1 = counter();
 closure1(); // output: 1
 closure1(); // output: 2
 // 2. Persistent Data and State 
 const closure2 = counter('/n');
 closure2(); // output: 1
 closure2(); // output: 2