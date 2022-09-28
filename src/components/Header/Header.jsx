import React from "react";
import './header.scss';
import Logo from '../../img/Logo.svg'

const Header = () => {
    return (
        <header>
            <div className='container header-wrap'>
                <img src={Logo} alt="Logo" />
                <div className='btn-wrap'>
                    <a className='btn btn-outline' href='./#users'>Users</a>
                    <a className='btn btn-outline' href='./#userForm'>Sign up</a>
                </div>
            </div>
        </header>
    )
}

export default Header;