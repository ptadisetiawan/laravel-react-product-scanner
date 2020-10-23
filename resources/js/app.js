/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// require('./src/App');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import * as serviceWorker from './serviceWorker';
import AuthProvider from './src/context/auth_context'
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductProvider from './src/context/product_context';

ReactDOM.render(
    // <React.StrictMode>
        <AuthProvider>
            <ProductProvider>
                <App />
            </ProductProvider>
        </AuthProvider>
    // </React.StrictMode>
    ,document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

