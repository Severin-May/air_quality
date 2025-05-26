import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <nav className="header-wrapper">
            <div className="logo">
                <NavLink to="/" className="brand header__title"><img className="logo-icon" src={"../../resources/aqi.png"}/></NavLink>
                <NavLink to="/" className="brand header__title">{props.title}</NavLink>
            </div>
            <div className="nav-wrapper">
                <div className="navigation">
                    <NavLink to="/" activeClassName="is-active" className="navlink" exact={true}>Home</NavLink>
                    <NavLink to="/about" activeClassName="is-active" className="navlink" exact={true}>About</NavLink>
                </div>
            </div>
        </nav>
    );
}

Header.defaultProps = {
    title: "Air quality prediction"
}

export default Header;