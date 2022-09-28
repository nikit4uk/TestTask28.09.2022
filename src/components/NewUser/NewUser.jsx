import React from "react";
import './newUser.scss';
import newUserImage from '../../img/success-image.svg'

const NewUser = () => {
    return (
        <section id='newUser'>
            <div className='container'>
                <h1>User successfully registered</h1>
                <img src={newUserImage} alt="" />
            </div>
        </section>
    )
}

export default NewUser;