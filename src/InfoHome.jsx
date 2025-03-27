import React from 'react';
import './InfoHome.css';

export function HomeInfo() {
    return (
        <section className='home-info-container'>
            <div className='info'>
                <p>Hi There!</p>
                <h1>I'm Saith</h1>
                <p>And I'm a FullStack Developer | React, Node.js</p>
                <br></br>
                <ButtonContact />
            </div>
            <div className='foto'>
                <img src="../public/foto.png" alt="Foto Saith" />
            </div>
        </section>
    );
}

export function ButtonContact() {
    return (
    <button className='button-contact'><b>Contact me</b></button>
    );
}
