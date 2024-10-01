

// Promise.race() method is used to handle multiple promises concurrently

const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'Hello'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'World!'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 3000, 'Tech'));

// Promise.race() takes an array of promises as input and returns a new promise 
Promise.all([promise1, promise2, promise3])
    .then((result) =>{
        // Promise.race() waits for only one promise to resolve or reject 
        console.log(result); // output : 'Hello'
    }).catch((error) => {
        console.error('Error:', error);
});

/*
Output: 

(3) ['Hello', 'World!', 'Tech']
0
: 
"Hello"
1
: 
"World!"
2
: 
"Tech"
length
: 
3
*/