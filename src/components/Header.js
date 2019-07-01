import React, { Component } from 'react'
import './App.css';

export default class Header extends Component {
    render() {
        return (
        <header className = "App-header" >
            <img src={"https://images.homedepot-static.com/productImages/612ae505-9daf-45c3-ac16-67f97dcb251d/svn/globalrose-flower-bouquets-prime-100-red-roses-64_1000.jpg"} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
        </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
        </a>
      </header >
        )
    }
}
