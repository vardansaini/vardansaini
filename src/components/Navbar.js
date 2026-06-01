import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
            <div className='nav__inner'>
                <Link to="/vardansaini" className="nav__logo" onClick={closeMobileMenu}>
                    VS
                </Link>
                <div className='nav__toggle' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav__menu nav__menu--open' : 'nav__menu'}>
                    {['About', 'Skills', 'Experience', 'Ventures', 'Publications', 'Projects'].map(item => (
                        <li key={item} className='nav__item'>
                            <a href={`#${item}`} className='nav__link' onClick={closeMobileMenu}>{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
