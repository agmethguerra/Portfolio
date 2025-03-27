import './NavBar.css'

export function NavBar (){
    return(
        <nav className='nav-container'>
            <div className="nav">
                <a href="#" className='title'><b>Portfolio</b></a>
                <div className="nav-menu">
                    <li><a href="#"><b>Home</b></a></li>
                    <li><a href="#">About me</a></li>
                    <li><a href="#">Projects</a></li>
                </div>
            </div>
        </nav>
    )
}