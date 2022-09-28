import React, { useState, useEffect } from "react";
import './userForm.scss';
import { inputActive, checkErrors, disabledBtnSubmit, activateBtnSubmit } from '../../store/script';
import NewUser from '../NewUser/NewUser';
import UsersService from '../../services/UsersServices';
import { token, getToken } from '../../services/TokenServices';
import { position, getPosition } from '../../services/PositionServices';


const UserForm = ({ users, CountID, userPerPage, setMoreUserPerPage }) => {

    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ userIsLoged, setUserIsLoged] = useState(false);

    getToken();
    disabledBtnSubmit();
    getPosition(setIsLoaded);

    useEffect(() => {}, [])

    let usersPositions = position.map((item) => {
        return (
            <label htmlFor={item.name} key={`positionID-${item.id}`}>
                {item.id === 1 && <input type="radio" defaultChecked id={item.name} name="position" />}
                {item.id !== 1 && <input type="radio"  id={item.name} name="position" />}
                {item.name}
            </label>
        )
    });

    if(!userIsLoged){
        return (
            <section id='userForm'>
                <div className='container userForm-wrap'>
                    <h3>Working with POST request</h3>
                    <form className='user-form' method="POST">
                        <fieldset className='name-wrap'>

                            <input type="text" onChange={()=>{
                                inputActive('name')
                                checkErrors('name', 'Please enter your name')
                            }} required id="name"/>

                            <label htmlFor='name' onChange={()=>{
                                inputActive('name')
                                checkErrors('name', 'Please enter your name')
                            }} className='name'>Your name</label>

                            <p className='error-message'></p>
                        </fieldset>
                        <fieldset className='email-wrap'>

                            <input type="email" onChange={()=>{
                                inputActive('email');
                                checkErrors('email', 'It is not email adress');
                                activateBtnSubmit();
                            }} required id="email" />

                            <label htmlFor='email' onChange={()=>{
                                inputActive('email');
                                checkErrors('email', 'It is not email adress');
                                activateBtnSubmit();
                            }} className='email'>Email</label>

                            <p className='error-message'></p>
                        </fieldset>
                        <fieldset className='phone-wrap'>

                            <input type="tel" onChange={()=>{
                                inputActive('phone');
                                checkErrors('phone', '+38 (XXX) XXX - XX - XX');
                                activateBtnSubmit();
                            }} pattern='^[\+]{0,1}380([0-9]{9})$' required id="phone" />

                            <label htmlFor='tel' onChange={()=>{
                                inputActive('phone');
                                checkErrors('phone', '+38 (XXX) XXX - XX - XX');
                                activateBtnSubmit();
                            }}
                            className='phone'>Phone</label>

                            <p className='error-message'>+38 (XXX) XXX - XX - XX</p>
                        </fieldset>
                        <fieldset className='fieldset-select'>
                            <label>Select your position</label>

                            {usersPositions}
                        </fieldset>
                        <fieldset className='file-uploader-wrap'>
                            <input type="file" id='fileUploader' required placeholder='Upload your photo'/>
                            <label onClick={(e) => {
                                let field = document.getElementById('fileUploader');
                                let newfield = document.querySelector('.uploader-text');
                                field.addEventListener('change', () => {
                                    activateBtnSubmit()
                                    var newValue = field.value.split(`fakepath`)[1].slice(1);
                                    newfield.innerHTML = newValue;
                                })
                            }} htmlFor='fileUploader' className='file-uploader'>
                                <span className='uploader-btn'>Upload</span>
                                <span className='uploader-text'>Upload your photo</span>
                            </label>
                        </fieldset>
                        <input type="submit" className='btn btn-outline' value="Sign up" onClick={(e) => {

                            e.preventDefault();
                            
                            let formData = new FormData(); // file from input type='file'
                            let nameField = document.querySelector('input[type="text"]');
                            let emailField = document.querySelector('input[type="email"]');
                            let telField = document.querySelector('input[type="tel"]');

                            let positionFields = 1;
                            let radioInputs = document.querySelectorAll('input[type="radio"]')
                            radioInputs.forEach((item, i) => {
                                if(item.checked) {
                                    positionFields = ++i;
                                }
                            })

                            let fileField = document.querySelector('input[type="file"]');
                            formData.append('position_id', positionFields);
                            formData.append('name', nameField.value);
                            formData.append('email', emailField.value);
                            formData.append('phone', telField.value);
                            formData.append('photo', fileField.files[0]);
                            
                            fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users',{
                                method: 'POST',
                                body: formData,
                                headers: {
                                    'Token': token, // get token with GET api/v1/token method
                                }, })
                                .then(function(response) {
                                    return response.json();
                                })
                                .then(function(data) {
                                    console.log(data);
                                    
                                    if(data.success) {
                                        setUserIsLoged(true);
                                        console.log( CountID, users, setIsLoaded )
                                        UsersService( CountID, users, setIsLoaded);
                                        setMoreUserPerPage(6)
                                    }
                                })
                                .catch(function(error) {
                                    // proccess network errors 
                                })
                        }}/>
                    </form>
                </div>
            </section>
        )
    } else {
        return <NewUser />
    }
};

export default UserForm;