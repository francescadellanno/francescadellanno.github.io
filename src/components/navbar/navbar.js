import React, { useState } from 'react';
import Hamburger from '../hamburger/hamburger';
import Sidebar from '../sidebar/sidebar';
import Close from '../close/close';
import './styles/navbar.scss';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="navbar__container">
                <Hamburger onClick={() => setMenuOpen(true)}/>
                <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <div className="navbar__name">
                    Francesca Dell'Anno
                </div>
            </div>  
        </>  
    )
}

export default NavBar;
