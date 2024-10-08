
// Prototypal Inheritance 

const vehicle = {
    type: 'Car',
    Drive(){
        console.log('Driving.......');
    }
};

// Creating a child object Object.create()
const bmw = Object.create(vehicle);

console.log(bmw.type); // Car
bmw.Drive(); // Driving....... 