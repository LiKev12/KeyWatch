import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {
        console.log("FormPersonalDetails");
        const { values, handleChange } = this.props;
        return (
                <React.Fragment>
                        <TextField 
                        hintText="Enter Age"
                        floatingLabelText="Age"
                        onChange = {handleChange('age')}
                        defaultValue={values.age}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter your Gender"
                        floatingLabelText="Gender"
                        onChange = {handleChange('Gender')}
                        defaultValue={values.gender}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter your Previous Medical History"
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
                    <Button
                        label="Back"
                        primary={false}
                        style={{margin:50}}
                        onClick={this.back}
                    />
                </React.Fragment>
        )
    }

}

export default FormPersonalDetails;
