import './InfoHome.css'

export function HomeInfo (){
    return(
        <>
            <section className='home-info-container'>
                <div className=''>
                    <p>Hi There!</p>
                    <h1>I am Saith</h1>
                    <p>And I am Frontend Developer | ReactJS</p>
                    <br />
                    <ButtonContact />
                </div>
                <div className='photo-container'>
                </div>
            </section>
        </>
    )
}

export function ButtonContact (){
    return(
        <button className='button-contact'>Contact me</button>
    )
}

