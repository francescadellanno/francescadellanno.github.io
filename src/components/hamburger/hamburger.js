import React from 'react';
import classnames from 'classnames';
import './styles/hamburger.scss';

const Hamburger = ({ onClick }) => {
    return (
        <div className="hamburger" onClick={onClick}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    )
}

export default Hamburger;
