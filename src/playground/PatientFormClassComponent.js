import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormConfirm from './FormConfirm';
import FormMain from './FormMain';

const styles = makeStyles(theme => ({
  outerContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: "50vw",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  innerContainer: {
    display: "block",
    flexWrap: "wrap"
  },
  textField: {
    background: "white",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  textField2: {
    background: "white",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: 15,
    width: 200
  }
}));

export class PatientForm2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      firstName: "John",
      lastName: "Doe",
      dob: "01/01/1970",
      multiline: "Controlled",
      gender: "Male",
      education: "High School"
    }
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
    const { firstName, lastName, email, dob, gender, education } = this.state;
    const values = { firstName, lastName, email, dob, gender, education };
    switch(step) {
      case 1:
          return (
            <FormMain 
              nextStep={this.nextStep}
              handleChange = {this.handleChange}
              styles= {this.styles}
              values={values}
            />
          )
      case 2:
        return (
          <FormConfirm 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        )
  }
}
}

export default PatientForm2;