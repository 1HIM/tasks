async function awaitCall() {
    try {
        // Simulating an API call with a delay
        const response = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Data from API');
            }, 2000); // Simulated 2-second API call
        });
        console.log(response);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

