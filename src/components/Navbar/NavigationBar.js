import React from "react"
import '../Navbar/Navbar.css'
import {useState} from "react"
import logo from "../../images/imagebfiq.png"
import { Link, animateScroll as scroll } from "react-scroll";

function NavigationBar(){
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const scrollToTop1 = () => {
        scroll.scrollToTop();
    };

    return (
        <React.Fragment>
            <nav className="navigation fixed">
                <Link to="top" className="brand-name active" onClick={scrollToTop1}>
                    <img src={logo} height="150px"/>
                </Link>
                <button className="hamburger" onClick={() => {
                        setIsNavExpanded(!isNavExpanded)
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"/>
                    </svg>
                </button>
                <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                    <ul>
                    <li>
                        <Link to="aboutme">Sobre Mi</Link>
                    </li>
                    <li>
                        <Link to="knowledge">Conocimientos</Link>
                    </li>
                    <li>
                        <Link to="projects">Proyectos</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    );
}

export {NavigationBar};