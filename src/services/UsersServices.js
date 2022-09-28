export default async function UsersService( CountID, users, setIsLoaded){
    setIsLoaded(false);
    // users.splice(0, users.length)
    let _apiBase = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';
    let _apiPage = '?page=';
    let _apiCount = '&count=';
    await fetch(`${_apiBase}${_apiPage}${_apiCount}${CountID}`)
        .then(function(response) {
            return response.json(); 
        })
        .then(function(data) {
            if(data.success) {
                setIsLoaded(true);
                for (let i = 0; i < data.users.length; i++) {
                    let shifted = users.splice(i, 1, data.users[i]);
                    // users.push(data.users[i]);
                }
            } else {
                setIsLoaded(true);
                console.log(`Could not fetch recived ${data.status}`);
            } 
        })
}