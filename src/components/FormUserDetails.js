import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        console.log("FormUserDetails");
        const { values, handleChange } = this.props;
        return (
                <React.Fragment>
                    <TextField 
                        hintText="Enter your First Name"
                        floatingLabelText="First Name"
                        onChange = {handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter your Last Name"
                        floatingLabelText="Last Name"
                        onChange = {handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter your Email"
                        floatingLabelText="Email"
                        onChange = {handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br/>
                    <Button
                        label="Continue"
                        primary={true}
                        style={{margin:50}}
                        onClick={this.continue}
                    />
                </React.Fragment>
        )
    }

}

export default FormUserDetails
