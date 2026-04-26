// script.js

// Function to call the backend API without exposing credentials
async function callApi(endpoint) {
    const response = await fetch(endpoint, {
        method: 'GET', // or 'POST'
        headers: {
            'Authorization': 'Bearer ' + process.env.API_TOKEN, // Using an environment variable
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}

// Example usage
callApi('/your-endpoint').then(data => console.log(data));
