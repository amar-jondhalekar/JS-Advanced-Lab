
function delay(ms){
    return new Promise((resolve, reject) => {
        // asyncrhonous operation 
        setTimeout(() => {
            console.log('Runing.......');
            resolve();
        }, ms);
    });
}


async function greet(){
    console.log('Starting.......');

    delay(2000); // Not Block 
    console.log('Not Blocked');

    await delay(1000); // Block the code until completion 
    console.log('Blocked...');
}

greet();