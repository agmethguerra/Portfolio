import './NavBar.css'
import { ButtonContact } from './InfoHome'

export function NavBar (){
    return(
        <>
            <nav className='nav-container'>
                <div className="nav">
                    <a href="#"><i><p><span>Saith</span><b> Guerra</b></p></i></a>
                    <ul className="nav-menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About me</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><ButtonContact /></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}