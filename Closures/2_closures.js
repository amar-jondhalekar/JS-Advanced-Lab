function outerFunction(){
    const outerVariable = 'outer scope';

    function innerFunction(){
        console.log(outerVariable);
    }
    return innerFunction;
}
const closure = outerFunction();
closure();