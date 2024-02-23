import './InfoHome.css'

export function HomeInfo (){
    return(
        <>
            <section className='home-info-container'>
                <div>
                    <p>Hi There!</p>
                    <h1>I am Saith</h1>
                    <p>And i am Frontend Developer | ReactJS</p>
                    <br />
                    <ButtonContact />
                </div>
                <aside className='photo-container'>
                    <img className='react-logo' src="../public/react-svgrepo-com.svg" alt="" />
                </aside>
            </section>
        </>
    )
}

export function ButtonContact (){
    return(
        <button className='button-contact'>Contact me</button>
    )
}