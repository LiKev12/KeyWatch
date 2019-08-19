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
        dobMonth: '',
        dobDay: '',
        dobYear: '',
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
        e.preventDefault();

        // console.log(input, [input], e.target.value);
        if (input === 'dobMonth') {
            console.log('dobby')
        }
        this.setState({[input]: e.target.value});
    }


    render() {
        const { step } = this.state;
        const { firstName, lastName, email, dobMonth, dobDay, dobYear, gender, education } = this.state;
        const values = { firstName, lastName, email, dobMonth, dobDay, dobYear, gender, education };
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
                        handleCheck = {this.handleCheck}
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
            default:
                return (
                    <FormUserDetails
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    values={values}
                />
                )
        }
    }
}

export default PatientForm;
