import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Footer = (props) => (
    <div>
        <footer className="footer">
            <small>
                Copyright © 2023 ECG-classifier: a bachelor thesis project, ELTE University 2023.
                All Rights Reserved.
            </small>
        </footer>
    </div>
)

export default Footer;