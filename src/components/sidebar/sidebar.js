import React from 'react';
import Close from '../close/close';
import './styles/sidebar.scss';

const Sidebar = ({ menuOpen, setMenuOpen }) => {
    const style = {
        width: `${menuOpen ? '300px' : '0px'}`
    };

    return (
        <>  
            <div className="c-sidebar" style={style}>
                <div className="c-sidebar__close">
                    <Close onClick={() => setMenuOpen(false)} />
                </div>
                <li>
                    <span className="c-sidebar__lazy-loading">Lazy Loading</span>
                    <ul><a href="#">Blur</a></ul>
                </li>

            </div>
        </>
    )
}

export default Sidebar;
