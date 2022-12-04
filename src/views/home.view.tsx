import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Nav from '../components/nav.component';
import Header from '../components/header.component'
import About from '../components/about.component'
import Footer from '../components/footer.component'
import {Row,Col,Container} from 'reactstrap';

function Home() {
    return (
        <div className="App">
            <Nav/>
            <Header/>
            <About/>
            <Footer/>

        </div>
    );
}

export default Home;
