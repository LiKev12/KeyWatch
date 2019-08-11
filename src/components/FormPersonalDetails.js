import React, { Component } from 'react'


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
        const { dobMonth, dobDay, dobYear, gender, education } = values;
        return (
            <div id="FormUserDetails">
                <div id="FormUserDetailsInput">
                    <label>Date of Birth:</label>
                    <br></br>
                    <div className='formDob'>
                        <input type='text'
                        className='formDobInput' 
                        value={dobMonth} 
                        name='dobMonth' 
                        placeholder = 'Month'
                        onChange={handleChange('dobMonth')}/>

                        <input type='text'
                        className='formDobInput' 
                        value={dobDay} 
                        name='dobDay' 
                        placeholder = 'Day'
                        onChange={handleChange('dobDay')}/>

                        <input type='text'
                        className='formDobInput' 
                        value={dobYear} 
                        name='dobYear' 
                        placeholder = 'Year'
                        onChange={handleChange('dobYear')}/>
                    
                    </div>

                    <br></br>

                    <label>Gender:</label>
                    <br></br>
                    <div>
                        <select value={gender} onChange={handleChange('gender')}>
                            <option>Female</option>
                            <option>Male</option>
                        </select>
                    </div>
                    <br></br>

                    <label>Highest Level of Education Completed:</label>
                    <br></br>
                    <div>
                        <select value={education} onChange={handleChange('education')}>
                            <option>High School</option>
                            <option>Community College</option>
                            <option>Associate's Degree</option>
                            <option>Bachelor's Degree</option>
                            <option>Master's Degree</option>
                            <option>Doctoral Degree</option>
                        </select>
                    </div>  
                    <br></br>

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
            </div>
        )
    }

}

export default FormPersonalDetails;
