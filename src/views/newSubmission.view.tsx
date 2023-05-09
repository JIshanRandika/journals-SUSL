import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Nav from '../components/nav.component';
import Footer from '../components/footer.component';
import {Row,Col,Container} from 'reactstrap';

// import MultiStep from "react-multistep";

const steps = [
    {title: 'StepOne', component: <Footer/>},
    {title: 'StepTwo', component: <Footer/>},
    {title: 'StepThree', component: <Footer/>},
    {title: 'StepFour', component: <Footer/>}
]

function NewSubmission() {

    return (
        <div className="NewSubmission">
            {/*<Nav/>*/}

            {/*<MultiStep activeStep={1} showNavigation={true} steps={steps}/>*/}

            <Footer/>

        </div>
    );
}

export default NewSubmission;
