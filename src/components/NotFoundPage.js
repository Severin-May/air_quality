import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const NotFoundPage = () => (<div><h1>404! <Link to="/">GO HOME</Link></h1></div>);

export default NotFoundPage;