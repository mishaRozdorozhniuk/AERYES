import React from 'react';
import './Backdrop.css';

const Backdrop = ({ show }) => {
    return show ? <div className="backdrop"></div> : null;
};

export default Backdrop;