// class example

class Person {
    /*
        Constructor :
            Constructors are special methods within classes that are automatically called whhen an object is created of the class using the new keyword.
    */
   
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`${this.name} - ${this.age}`);
    }
}

// Creating objects from the class 
const person1 = new Person('Alice', 22);
const person2 = new Person('Bob', 23);

console.log(person1.name + person1.age);
person2.sayHello();


/*
    Advantages of classes :
        Object Creation 
        Encapsulation
        Inheritance 
        Code Reusability 
        Polymorphism 
        Abstraction

*/