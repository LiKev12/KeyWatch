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
        const { values, handleChange } = this.props;
        const { firstName, lastName, email, dob, gender, education } = values;
        return (
            <div id="FormUserDetails">
                <div id="FormUserDetailsInput">
                    <label>Date of Birth:</label>
                    <br></br>
                    <input type='text'
                    className='inputPersonalDetails' 
                    value={firstName} 
                    name='firstName' 
                    placeholder = 'mm/dd/yyyy'
                    onChange={this.props.handleChange('firstName')}/>
                    <br></br>

                    <label>Gender:</label>
                    <br></br>
                    <input type='text'
                    className='inputPersonalDetails' 
                    value={lastName} 
                    name='lastName' 
                    placeholder = 'female'
                    onChange={this.props.handleChange('lastName')}/>
                    <br></br>

                    <label>Highest Level of Education Completed:</label>
                    <br></br>
                    <input type='text'
                    className='inputPersonalDetails' 
                    value={email} 
                    name='email' 
                    placeholder = 'mm/dd/yyyy'
                    onChange={this.props.handleChange('email')}/>
                    <br></br>
                    <button
                        primary={true}
                        className="button button1"
                        onClick={this.continue}>
                        Continue
                    </button>
                    
                    <div className="dropdown">
                        <button className="dropbtn">{this.props.education ? this.props.education : 'Dropdown'}</button>
                        <div className="dropdown-content">
                            <a href="#" onClick={this.props.handleChange('education')} value='yeet'>High School</a>
                            <a href="#">Community College</a>
                            <a href="#">Associate's Degree</a>
                            <a href="#">Bachelor's Degree</a>
                            <a href="#">Master's Degree</a>
                            <a href="#">Doctoral Degree</a>
                        </div>
                    </div>
                    <button
                        className="button button1"
                        onClick={this.continue}>
                        Continue
                    </button>                    
                    <button
                        className="button button1"
                        onClick={this.back}>
                        Back
                    </button>
                </div>
            </div>
        )
    }

}

export default FormPersonalDetails;

// <React.Fragment>
// <TextField 
// hintText="Enter Age"
// floatingLabelText="Age"
// onChange = {handleChange('age')}
// defaultValue={values.age}
// />
// <br/>
// <TextField 
// hintText="Enter your Gender"
// floatingLabelText="Gender"
// onChange = {handleChange('Gender')}
// defaultValue={values.gender}
// />
// <br/>
// <TextField 
// hintText="Enter your Previous Medical History"
// floatingLabelText="Email"
// onChange = {handleChange('email')}
// defaultValue={values.email}
// />
// <br/>
// <Button
// label="Continue"
// primary={true}
// style={{margin:50}}
// onClick={this.continue}
// />
// <Button
// label="Back"
// primary={false}
// style={{margin:50}}
// onClick={this.back}
// />
// </React.Fragment>