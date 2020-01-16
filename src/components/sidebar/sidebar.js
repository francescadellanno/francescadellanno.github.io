import React from 'react';
import Close from '../close/close';
import './styles/sidebar.scss';
import { Link } from 'react-router-dom';

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
                    <div><Link to="/">Home</Link></div>
                    <div>Lazy Loading</div>
                    <ul>
                        <div>
                            <Link to="/blur">Blur</Link>
                        </div>
                        <div>
                            <Link to="/pixelated">Pixelated</Link>
                        </div>
                    </ul>
                </li>

            </div>
        </>
    )
}

export default Sidebar;
