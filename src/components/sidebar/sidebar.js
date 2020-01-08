import React from 'react';
import Close from '../close/close';
import './styles/sidebar.scss';

const Sidebar = ({ menuOpen, setMenuOpen }) => {
    const style = {
        width: `${menuOpen ? '300px' : '0px'}`
    };

    return (
        <>  
            <div className="sidebar" style={style}>
                <div className="c-sidebar__close">
                    <Close onClick={() => setMenuOpen(false)} />
                </div>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
        </>
    )
}

export default Sidebar;
