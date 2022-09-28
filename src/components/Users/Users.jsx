import React, { useState, useEffect } from "react";
import UsersService from '../../services/UsersServices';
import './users.scss'
import Preloader from '../../img/Preloader.png'

const Users = ({ users, CountID, userPerPage, setMoreUserPerPage }) => {
    const [ isLoaded, setIsLoaded ] = useState(false);

    useEffect(() => {
        UsersService( CountID, users, setIsLoaded);
        return () => UsersService( CountID, users, setIsLoaded);
    }, [userPerPage])

    if(!isLoaded){
        return (
            <section id='users'>
            <div className='container'>
                <h3>Working with GET request</h3>
                <div className='users-wrap'>
                    <img className='loading' src={Preloader} />
                </div>
                {userPerPage < 60 && <a className='btn btn-outline' onClick={() => setMoreUserPerPage((u) => u + 6)}>Show more</a>}
            </div>
        </section>
        )
    } else{
        let userRender = users.map((user, i) => {
            if( i < userPerPage){
                return (
                    <div className="user-wrap" key={`userID-${user.id}`}>
                        <img className='user-img' src={user.photo} alt='user-image' />
                        <p className='user-name' title={user.name}>{user.name}</p>
                        <div className='user-info'>
                            <p title={user.position}>{user.position}</p>
                            <p title={user.email}>{user.email}</p>
                            <p>{user.phone}</p>
                        </div>
                    </div>
                )
            }
        })


    return (
        <section id='users'>
            <div className='container'>
                <h3>Working with GET request</h3>
                <div className='users-wrap'>
                    {userRender}
                </div>
                {userPerPage < 60 && <a className='btn btn-outline' onClick={() => {
                    UsersService( CountID, users, setIsLoaded);
                    setMoreUserPerPage((u) => u + 6)
                    }}>Show more</a>}
            </div>
        </section>
    )
}
}

export default Users;