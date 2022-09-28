let position = [];

async function getPosition(setIsLoaded){
    // setIsLoaded(false);
    await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                if(data.success) {
                    setIsLoaded(true);
                    position = data.positions
                }
            })
}

export { position, getPosition };