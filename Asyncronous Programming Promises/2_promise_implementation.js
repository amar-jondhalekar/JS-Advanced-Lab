// Create a promise using promise constructor 
const myPromise = new Promise((resolve, reject) => {

    // Set a timeOut() of 1 second
    setTimeout(() => {
        // Generate a random number between 0-9
        const randomNum = Math.floor(Math.random() * 10);

        // resolve the promise 
        if(randomNum < 5){
            resolve(`Success! Random Number: ${randomNum}`);
        }
        // reject the promise 
        else{
            reject(`Error! Random Number: ${randomNum}`);
        }
    }, 1000); 
});


myPromise
    .then((result)=> {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });


    // Success! Random Number: 4
    // Error! Random Number: 9
