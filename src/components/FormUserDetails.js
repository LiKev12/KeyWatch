import React, { Component } from 'react'

export class FormUserDetails extends Component {
  
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    // handleInputChange = (e) => {
    //     e.preventDefault();

    //     if (!e.target.value || e.target.value.match(/^[0-9]{1,2}?$/)) {
    //         this.setState({
    //             [e.target.name]: e.target.value,
    //         })
    //     }
    // }

    onHandleClick = (e) => {
        e.preventDefault();
        console.log(this.state.firstName)
    }

    render() {
        // console.log("FormUserDetails");
        const { values, handleChange } = this.props;
        const { firstName, lastName, email, dob, gender, education } = values;
        return (
            <div id="FormUserDetails">
                <div id="FormUserDetailsInput">
                    <label>First Name:</label>
                    <br></br>
                    <input type='text'
                    className='inputUserDetails' 
                    value={firstName} 
                    name='firstName' 
                    placeholder = 'First Name'
                    onChange={this.props.handleChange('firstName')}/>
                    <br></br>

                    <label>Last Name:</label>
                    <br></br>
                    <input type='text'
                    className='inputUserDetails' 
                    value={lastName} 
                    name='lastName' 
                    placeholder = 'Last Name'
                    onChange={this.props.handleChange('lastName')}/>
                    <br></br>

                    <label>Email:</label>
                    <br></br>
                    <input type='text'
                    className='inputUserDetails' 
                    value={email} 
                    name='email' 
                    placeholder = 'Email'
                    onChange={this.props.handleChange('email')}/>
                    <br></br>
                    <button
                        primary={true}
                        className="button button1"
                        onClick={this.continue}>
                        Continue
                    </button>
                </div>
            </div>
        )
    }

}

export default FormUserDetails


// <React.Fragment>
// <TextField 
//     hintText="Enter your First Name"
//     floatingLabelText="First Name"
//     onChange = {handleChange('firstName')}
//     defaultValue={values.firstName}
// />
// <br/>
// <TextField 
//     hintText="Enter your Last Name"
//     floatingLabelText="Last Name"
//     onChange = {handleChange('lastName')}
//     defaultValue={values.lastName}
// />
// <br/>
// <TextField 
//     hintText="Enter your Email"
//     floatingLabelText="Email"
//     onChange = {handleChange('email')}
//     defaultValue={values.email}
// />
// <br/>
// <Button
//     label="Continue"
//     primary={true}
//     style={{margin:50}}
//     onClick={this.continue}
// />
// </React.Fragment>