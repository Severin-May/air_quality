import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss'
import 'normalize.css/normalize.css'
import ECGClassifier from './components/ECGClassifier';
import AppRouter from './routers/AppRouter';

ReactDOM.render(<AppRouter/>, document.getElementById('appRoot'));