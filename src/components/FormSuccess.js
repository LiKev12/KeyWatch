import React, { Component } from 'react';


export class FormSuccess extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM (BACKEND) //
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        console.log("FormSuccess");
        return (
                <React.Fragment>
                    <h1>Thank you for your submission</h1>
                    <p>You will get an email with further instructions.</p>
                </React.Fragment>
        )
    }

}

export default FormSuccess;
