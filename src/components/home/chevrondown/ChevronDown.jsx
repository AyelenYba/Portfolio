import React from 'react';
import './ChevronDown.css';

const ChevronDown = ({ isChevronHide }) => {
    return (
        <div className={`chevron-down ${isChevronHide}`}>
            <a href="#about">
                <i className="fas fa-chevron-down floating"></i>
            </a>
        </div>
    )
}

export default ChevronDown;