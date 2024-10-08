

async function fetchData(){
    console.log('Inside the async function');
    return 'Done';
}

const result = fetchData();
console.log(result);

/*

Output :
    Inside the async function
    3_async_without_await.js:9 Promise {<fulfilled>: 'Done'}

*/

localStorage.setItem('key', 'value');
localStorage.clear();