import './NavBar.css'

export function NavBar (){
    return(
        <>
            <nav className='nav-container'>
                <div class="nav">
                    <i><p><span>Saith</span><b> Guerra</b></p></i>
                    <ul class="nav-menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About me</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}