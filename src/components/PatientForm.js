import React, { Component } from 'react';
import {Radio, RadioGroup, Textfield, IconButton, Chip} from 'react-mdl';

class PatientForm extends Component{
    render() {
        return (
            <div className="PatientForm">
                <h1 style={{textAlign: "center"}}>Tell us more about yourself</h1>
                <h6><b>Help us help you </b></h6>

                <h5><b>Personal Information</b></h5>
                <hr/>

                <Textfield
                    onChange={() => {}}
                    label="First Name"
                    style={{width: '200px', marginRight:'30px'}}
                    floatingLabel={true}
                    required={true}
                />
                <Textfield
                    onChange={() => {}}
                    label="Last Name"
                    style={{width: '200px'}}
                    floatingLabel={true}
                    required={true}
                />
                <RadioGroup name="demo" value="Hide">
                    <Radio value="Male" ripple>Male</Radio>
                    <br></br>
                    <Radio value="Female">Female</Radio>
                    <br></br>
                    <Radio value="Hide">Prefer not to say</Radio>
                </RadioGroup>
                <Textfield
                    onChange={() => {}}
                    label="Date of Birth"
                    style={{width: '200px'}}
                    floatingLabel={true}
                    required={true}
                />
                <IconButton name="event note" />

                <h5><b>Family Medical History</b></h5>
                <hr/>
                <div style={{'fontSize': '24px'}}>
                Grandparents:  .
                <Chip onClose={e => { alert('Close icon clicked!'); }}>Alzheimer's</Chip> . 
                <Chip onClose={e => { alert('Close icon clicked!'); }}>Diabetes</Chip> . 
                <Chip onClose={e => { alert('Close icon clicked!'); }}>Dementia</Chip>
                <br></br>
                <br></br>

                Parents:  .
                <Chip onClose={e => { alert('Close icon clicked!'); }}>Mood Disorder</Chip> . 
                <Chip onClose={e => { alert('Close icon clicked!'); }}>High Blood Pressure</Chip>
                </div>

                <h5><b>Drug Information</b></h5>
                <hr/>
                <div style={{'fontSize': '24px'}}>
                Illments:  .
                <Chip onClose={e => { alert('Close icon clicked!'); }}>Depression</Chip> . 
                <Chip onClose={e => { alert('Close icon clicked!'); }}>Mood Swings</Chip> . 
                <Chip onClose={e => { alert('Close icon clicked!'); }}>Trouble Sleeping</Chip>
                <br></br>
                <br></br>

                Prescriptions:  .
                <Chip onClose={e => { alert('Close icon clicked!'); }}>Risperidone</Chip> . 
                <Chip onClose={e => { alert('Close icon clicked!'); }}>Prozac</Chip>
                </div>

                <h5><b>Symptom Information</b></h5>
                <hr/>
                <div style={{'fontSize': '24px'}}>
                <Chip onClose={e => { alert('Close icon clicked!'); }}>Tremors</Chip> . 
                <Chip onClose={e => { alert('Close icon clicked!'); }}>Constipation</Chip> . 
                <Chip onClose={e => { alert('Close icon clicked!'); }}>Stiffness</Chip>
                <br></br>
                <br></br>
                </div>
            </div>
        )
    }
}

export default PatientForm;