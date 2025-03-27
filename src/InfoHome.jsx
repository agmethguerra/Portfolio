import React from 'react';
import './InfoHome.css';
import foto from "../assets/foto.png"

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
                <img src={foto} alt="Foto" />
            </div>
        </section>
    );
}

export function ButtonContact() {
    return (
    <button className='button-contact'><b>Contact me</b></button>
    );
}
