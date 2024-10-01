function outerScope(){
    const outerVariable = 'outer';
    function innerScope(){
        console.log(outerVariable);
    }
    innerScope();
}
outerScope();