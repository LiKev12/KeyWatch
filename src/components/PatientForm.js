import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
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
  },
  submitButton: {
    background: "#0B0C10",
    border: 0,
    borderRadius: 3,
    color: "#66FCF1",
    height: 48,
    width: 180,
    margin: "10px",
    display: 'flex'
  },
  box: {
    textAlign: "center",
    height: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
}));

const levelsOfEducation = [
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

const genderOptions = [
  {
    value: "Female",
    label: "Female"
  },
  {
    value: "Male",
    label: "Male"
  }
];

export default function PatientForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    step: 1,
    firstName: "John",
    lastName: "Doe",
    dob: "1970-01-01",
    multiline: "Controlled",
    gender: "Male",
    education: "High School"
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div className={classes.box}>
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
        <div className={classes.innerContainer}>
          <TextField
            id="standard-name"
            label="Birthday"
            type="date"
            value={values.dob}
            className={classes.textField2}
            onChange={handleChange("dob")}
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
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText="Select your birth gender"
            margin="normal"
          >
            {genderOptions.map(option => (
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
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText="Select your highest level of education"
            margin="normal"
          >
            {levelsOfEducation.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </form>
      <Button
        variant="contained"
        className={classes.submitButton}
        onClick={() => console.log(values.dob)}
      >
        Submit
      </Button>
      </div>
  )
}


