
function processApiResponse(error, response){
    if(error){
        console.error("Error:", error);
    }else{
        console.log("Data:", response.data);
        console.log("Data:", response.info);
        console.log("Data:", response.role);
        console.log("Data:", response.salary);
    }
}

// processApiResponse funtion as a callback 
fetchData(processApiResponse);

function fetchData(callback){
    
    // Simulating data fetching from an API 
    setInterval(() => {
        const apiResponse = {data: 'Fetched data', info: 'amar', role: 'software engineer1', salary: '90,000'};
        callback(null, apiResponse);
    }, 1000);
}

