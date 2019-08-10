import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

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
                    <Button
                        label="Confirm & Continue"
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

export default FormConfirm;
