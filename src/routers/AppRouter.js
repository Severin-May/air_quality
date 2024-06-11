import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import About from '../components/About';
import Articles from '../components/Articles';
import FAQ from '../components/FAQ';
import NotFoundPage from '../components/NotFoundPage';
import ECGClassifier from '../components/ECGClassifier';
import Footer from '../components/Footer';

const AppRouter = () => (
    <BrowserRouter>
        <div className="app-container">
            <Header/>
            <Switch>
                <Route path='/' component={ECGClassifier} exact={true} />
                <Route path='/about' component={About} />
                <Route path='/articles' component={Articles} />
                <Route path='/faq' component={FAQ} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
)

export default AppRouter;