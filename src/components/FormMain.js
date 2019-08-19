import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";

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

export class FormMain extends Component {
  constructor(props) {
    super(props);
    this.levelsOfEducation = [
      {
        value: "High School",
        label: "High School"
      },
      {
        value: "Community College",
        label: "Community College"
      },
      {
        value: "Associate's Degree",
        label: "Associate's Degree"
      },
      {
        value: "Bachelor's Degree",
        label: "Bachelor's Degree"
      },
      {
        value: "Master's Degree",
        label: "Master's Degree"
      },
      {
        value: "Doctoral Degree",
        label: "Doctoral Degree"
      }
    ];
    this.genderOptions = [
      {
        value: "Female",
        label: "Female"
      },
      {
        value: "Male",
        label: "Male"
      }
    ];
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { classes } = this.props;
    const { values, handleChange } = this.props;
    return (
      <div>
        <form className={classes.outerContainer} noValidate autoComplete="off">
          <div className={classes.innerContainer}>
            <TextField
              id="standard-name"
              label="First Name"
              className={classes.textField}
              value={values.firstName}
              onChange={handleChange("firstName")}
              margin="normal"
            />
            <TextField
              id="standard-name"
              label="Last Name"
              className={classes.textField}
              value={values.lastName}
              onChange={handleChange("lastName")}
              margin="normal"
            />
            <TextField
              id="standard-with-placeholder"
              label="Email"
              placeholder="your_email@gmail.com"
              className={classes.textField}
              margin="normal"
            />
          </div>
          <br />
          <br />
          <div className={classes.innerContainer}>
            <TextField
              id="standard-name"
              label="Birthday"
              type="date"
              defaultValue="1970-01-01"
              className={classes.textField2}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              id="standard-select-currency"
              select
              label="Gender"
              className={classes.textField}
              value={values.gender}
              onChange={handleChange("gender")}
              helperText="Select your birth gender"
              margin="normal"
            >
              {this.genderOptions.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="standard-select-currency"
              select
              label="Education"
              className={classes.textField}
              value={values.education}
              onChange={handleChange("education")}
              helperText="Select your highest level of education"
              margin="normal"
            >
              {this.levelsOfEducation.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </form>
        <Button variant="contained" className="" onClick={this.continue}>
          Continue
        </Button>
      </div>
    );
  }
}

FormMain.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormMain);
