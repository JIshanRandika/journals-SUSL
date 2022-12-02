import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Nav from '../components/nav.component';
import Header from '../components/header.component'

function Home() {
    return (
        <div className="App">
            <Nav/>
            <Header/>
            <header style={{position:'relative'}} className="App-header">
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default Home;
