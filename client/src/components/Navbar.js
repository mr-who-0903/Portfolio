import Reactm, {useState} from 'react'
import '../css/Navbar.css';

const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false);

    return (
        <header>
        <nav className="navbar">
            <h5><b>RITIK JAIN</b></h5>
                <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About us</a>
                    </li>
                    <li>
                        <a href="#project">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
    
            <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? <i class="fas fa-times"></i>: <i class="fas fa-bars"></i>}
            </button>
        </nav>
        </header>
    )
}

export default Navbar
