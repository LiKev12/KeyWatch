import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem }from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

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
        const { values: { firstName, lastName, email, age, gender, bio} } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <List>
                        <ListItem primaryText="First Name" secondaryText = { firstName } />
                        <ListItem primaryText="Last Name" secondaryText = { lastName } />
                        <ListItem primaryText="Email" secondaryText = { email } />
                        <ListItem primaryText="Age" secondaryText = { age } />
                        <ListItem primaryText="Gender" secondaryText = { gender } />
                        <ListItem primaryText="Bio" secondaryText = { bio } />
                    </List>
                    <br />
                    <RaisedButton
                        label="Confirm & Continue"
                        primary={true}
                        style={{margin:50}}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={{margin:50}}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }

}

export default FormConfirm;
