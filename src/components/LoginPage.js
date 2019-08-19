import React from "react";
import { Redirect } from "react-router-dom";
import { useAuth0 } from "../react-auth0-wrapper";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#1F2833",
    textAlign: "center",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  loginButton: {
    background: "#fc8966",
    border: 0,
    borderRadius: 3,
    color: "white",
    height: 48,
    margin: "10px"
  },
  signupButton: {
    background: "#ac66fc",
    border: 0,
    borderRadius: 3,
    color: "white",
    height: 48,
    margin: "10px",
  },
  aboutButton: {
    background: "#0B0C10",
    border: 0,
    borderRadius: 3,
    color: "#66FCF1",
    height: 48,
    width: 180,
    margin: "10px"
  },

});

const LoginPage = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const classes = useStyles();
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div>
      <div className={classes.container}>
        {!isAuthenticated && (
          <div>
            <div className={classes.loginAndRegister}>
                <div className="typewriter">
                <h1>Welcome to KeyWatch</h1>
                </div>
                <Button
                variant="contained"
                className={classes.loginButton}
                onClick={() => loginWithRedirect({})}
                >
                Log in
                </Button>
                <Button
                variant="contained"
                className={classes.signupButton}
                onClick={() => loginWithRedirect({})}
                >
                Sign Up
                </Button>
            </div>
            <Button
              variant="contained"
              className={classes.aboutButton}
              onClick={() => window.location.href = '/about'}
            >
              About
            </Button>
          </div>
        )}
        
        </div>
    </div>
  );
};

export default LoginPage;