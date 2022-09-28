import React from "react";
import './main.scss';

const Main = () => {
    return (
        <section id='main'>
            <div className='container main-wrap'>
                <div className='text-wrap'>
                    <h1>Test assignment for front-end developer</h1>
                    <h3>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</h3>
                    <div className='btn-wrap'>
                        <a className='btn btn-outline' href='./#userForm'>Sign up</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main;