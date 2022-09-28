let token = '';

async function getToken(){
    // setIsLoaded(false);
    await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                if(data.success) {
                    token = data.token
                }
            })
            .catch(function(error) {
                // proccess network errors 
            });
}

export { token, getToken };