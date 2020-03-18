import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from './App';


/* document.getElementById('root') gets the element from
ReactDom / insert the App*/

ReactDOM.render(
    <BrowserRouter>
    <App /></BrowserRouter>,
    document.getElementById('root')
);
