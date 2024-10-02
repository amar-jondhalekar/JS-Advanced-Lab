// Purpose of Async and Await : compare it with Promises 
function fetchData() {
   return new Promise((resolve, reject) => {
        // asynchronous operation 
        setTimeout(() => {
            resolve('Data has been fetched!');
        }, 1000);
    });
}

// Promises 
fetchData()
    .then((result) => {
        console.log(result); // Logs: 'Data has been fetched!'
    })
    .catch((error) => {
        console.error('Error:', error);
    });

// Async and Await 
async function doSomethingAsync(){
    try{
        const result = await fetchData();
        console.log(result);
    }catch(error){
        console.error(error);
    }
}

doSomethingAsync();