import React from 'react';
import './styles/close.scss';

const Close = ({ onClick }) => {
    return (
        <div className="close" onClick={onClick}>
            <div className="bar1"></div>
            <div className="bar2"></div>
        </div>
    )
}

export default Close;
