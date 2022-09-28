// let token = '';
// let position = [];

// function getToken(){
//     fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {
//             if(data.success) {
//                 token = data.token
//             }
//         })
//         .catch(function(error) {
//             // proccess network errors 
//         });
// }

// function getPosition(setIsLoaded){
//     fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {
//             if(data.success) {
//                 setIsLoaded(true);
//                 position = data.positions
//             }
//         })
// }

function inputActive(id){
    let input = document.querySelector(`#${id}`)
    if(input.value.length > 0){
        input.classList.add('active')
    } else {
        input.classList.remove('active')
    }
};

function checkErrors(id, error){
    let input = document.querySelector(`#${id}`);
    let errorWrap = input.parentElement.querySelector(`.error-message`);
    if(!input.checkValidity()){
        input.parentElement.classList.add('warn')
        errorWrap.innerHTML = '';
        errorWrap.innerHTML = error;
    } else {
        input.parentElement.classList.remove('warn')
        errorWrap.innerHTML = ''
    }
}

function disabledBtnSubmit(){
    setTimeout(() => {
        let submitInput = document.querySelector('input[type="submit"]');
        submitInput.disabled = true;
    }, 100)
}

function activateBtnSubmit(){
    let nameInput = document.querySelector('input#name');
    let emailInput = document.querySelector('input#email');
    let phoneInput = document.querySelector('input#phone');
    let fileInput = document.querySelector('input#fileUploader');
    let submitInput = document.querySelector('input[type="submit"]');
    if(nameInput.checkValidity() && emailInput.checkValidity() && phoneInput.checkValidity() && fileInput.checkValidity()){
        submitInput.disabled = false;
    }
}

export { inputActive, checkErrors, disabledBtnSubmit, activateBtnSubmit };