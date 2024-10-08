/* Constructor Functions 
    Constructor functions are a way of creating objects and initiaizing their properties. 
*/
function Person(name, age){
    this.name = name;
    this.age = age;
}

// Creating Objects from the class 
const person1 = new Person('Alice', 22);
const person2 = new Person('Bob', 21);

console.log(person1.name);
console.log(person1.age);