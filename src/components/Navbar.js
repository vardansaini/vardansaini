import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/vardansaini" className="navbar-logo" onClick={closeMobileMenu}>
                    Vardan Saini {/*<i className="fab fa-typo3"/>*/}
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    {/*<ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                            Projects
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/publications' className='nav-links' onClick={closeMobileMenu}>
                            Publications
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                        </li>
                        
    </ul>*/}
                    
                </div>
                </nav>
        </>
    );
}

export default Navbar;