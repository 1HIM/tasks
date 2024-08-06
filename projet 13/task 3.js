async function concurrentRequests() {
    try {
        const [response1, response2] = await Promise.all([
            new Promise(resolve => setTimeout(() => resolve('Data from API 1'), 2000)),
            new Promise(resolve => setTimeout(() => resolve('Data from API 2'), 3000))
        ]);
        console.log('Combined Results:', response1, response2);
    } catch (error) {
        console.error('Error with concurrent requests:', error);
    }
}

