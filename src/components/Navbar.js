import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.navBrand}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">{props.aboutText}</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">{props.contact}</Link>
                    </li>
                </ul>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" 
                           onClick={props.setTheme}
                           type="radio" 
                           name="inlineRadioOptions" 
                           id="inlineRadio1" 
                           value="red"/>
                    <label className="form-check-label text-danger" htmlFor="inlineRadio1">Red Mode</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" 
                           onClick={props.setTheme}
                           type="radio" 
                           name="inlineRadioOptions" 
                           id="inlineRadio2" 
                           value="green"/>
                    <label className="form-check-label text-success" htmlFor="inlineRadio2">Green Mode</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" 
                           onClick={props.setTheme}
                           type="radio" 
                           name="inlineRadioOptions" 
                           id="inlineRadio3" 
                           value="blue"/>
                    <label className="form-check-label text-primary" htmlFor="inlineRadio3">Blue Mode</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" 
                           onClick={props.setTheme}
                           type="radio" 
                           name="inlineRadioOptions" 
                           id="inlineRadio4" 
                           value="light"/>
                    <label className={`form-check-label text-${props.mode}`} htmlFor="inlineRadio4">Light Mode</label>
                </div>
            </div>
        </div>
    </nav>
  )
}

Navbar.propTypes = {
    navBrand: PropTypes.string.isRequired,
    aboutText: PropTypes.string,
    contact: PropTypes.string,
    mode: PropTypes.string,
    setTheme: PropTypes.func.isRequired
}

Navbar.defaultProps = {
    navBrand: "Brand Name",
    aboutText: "About",
    contact: "Contact Us",
    mode: "light"
}