import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import image from './image.jpg';
import * as serviceWorker from './serviceWorker';


function App () {
    return (
        <section className = "app">
            <div className = "card">
                <img src ={image} alt ="hey"/>
                <h1>Pico Farad</h1>
                <p> Email:faradgenius@yes.com</p>
                <p>Number:+235678903837 </p>

            </div>
        </section>

    );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

