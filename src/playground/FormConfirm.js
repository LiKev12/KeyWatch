import React, { Component } from 'react'


export class FormConfirm extends Component {
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
        console.log("FormConfirm");
        const { values } = this.props;
        const  { firstName, lastName, email, dobMonth, dobDay, dobYear, gender, education } = values;
        return (
            <div id="FormUserDetails">
                <div className="confirmationBody">
                    <label className="confirmationLabel"><b>First Name:</b></label>
                    {firstName}
                    <br></br><br></br>
                    <label className="confirmationLabel"><b>Last Name:</b></label>
                    {lastName}
                    <br></br><br></br>
                    <label className="confirmationLabel"><b>Email:</b></label>
                    {email}
                    <br></br><br></br>
                    <label className="confirmationLabel"><b>Date of Birth:</b></label>
                    {dobMonth + '/' + dobDay + '/' + dobYear}
                    <br></br><br></br>
                    <label className="confirmationLabel"><b>Gender:</b></label>
                    {gender}
                    <br></br><br></br>
                    <label className="confirmationLabel"><b>Highest Level of Education:</b></label>
                    {education}
                    <br></br><br></br>
                </div>
                <div className="formTwoButtons">
                    <button
                        className="patientFormButton"
                        onClick={this.continue}>
                        Continue
                    </button>                    
                    <button
                        className="patientFormButton"
                        onClick={this.back}>
                        Back
                    </button>
                </div>            
            </div>
        )
    }

}

export default FormConfirm;

// <React.Fragment>
// <List>
//     <ListItem primaryText="First Name" secondaryText = { firstName } />
//     <ListItem primaryText="Last Name" secondaryText = { lastName } />
//     <ListItem primaryText="Email" secondaryText = { email } />
//     <ListItem primaryText="Age" secondaryText = { age } />
//     <ListItem primaryText="Gender" secondaryText = { gender } />
//     <ListItem primaryText="Bio" secondaryText = { bio } />
// </List>
// <br />
// <Button
//     label="Confirm & Continue"
//     primary={true}
//     style={{margin:50}}
//     onClick={this.continue}
// />
// <Button
//     label="Back"
//     primary={false}
//     style={{margin:50}}
//     onClick={this.back}
// />
// </React.Fragment>