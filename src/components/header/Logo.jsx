import React from "react";
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/" className="company-logo-container">
            <div title="Home" className="company-logo-text">DITTO</div>
        </Link>
    );
};

export default Logo;
