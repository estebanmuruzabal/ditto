import React from "react";
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className="left-container">
            <Link to="/" className="company-logo-container">
            <div title="Home" className="company-logo-text">Company Name</div>
            </Link> 
        </div>
    );
};

export default Logo;
