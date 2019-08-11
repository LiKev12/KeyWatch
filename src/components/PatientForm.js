import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import FormConfirm from './FormConfirm';
import FormSuccess from './FormSuccess';

export class PatientForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        gender: '',
        education: ''
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change
    handleChange = input => e => {
        // console.log(input);
        // console.log(e.target.value);
        console.log(input, [input], e.target.value);
        this.setState({[input]: e.target.value});
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, dob, gender, education} = this.state;
        const values = { firstName, lastName, email, dob, gender, education};
        switch(step) {
            case 1:
                return (
                    <FormUserDetails
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    values={values}
                />
                )
            case 2:
                return (
                    <FormPersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange = {this.handleChange}
                        values={values}
                />
                )
            case 3:
                return (
                    <FormConfirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 4:
                return <FormSuccess />

        }
    }
}

export default PatientForm;
