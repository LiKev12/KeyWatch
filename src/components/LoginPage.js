import React, { Component } from "react";
import { useAuth0 } from "../react-auth0-wrapper";

import { Link, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import About from './About';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Dashboard from "./Dashboard";
import Main from "./Main";

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

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
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
                <div class="typewriter">
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

export default NavBar;

// <div className="demo-big-content">
// <Layout>
//     <Header className="header-color" style={{color:"#66FCF1"}} title= {<a href="localhost:3000/dashboard">Welcome to KeyWatch</a>} scroll>
//         <Navigation>
//             <Link to="/dashboard"  style={{color:"#66FCF1", fontWeight: "bold"}}>Dashboard</Link>
//             <Link to="/patientform" style={{color:"#66FCF1", fontWeight: "bold"}}>Patient Form</Link>
//             <Link to="/patientview" style={{color:"#66FCF1", fontWeight: "bold"}}>Patient View</Link>
//             <Link to="/doctorview" style={{color:"#66FCF1", fontWeight: "bold"}}>Doctor View</Link>
//             <Link to="/profile">Profile</Link>
//         </Navigation>
//     </Header>
//     <Drawer title="KeyWatch" style={{color:"#66FCF1", backgroundColor:"#1F2833"}}>
//         <Navigation>
//             <Link to="/dashboard" style={{color:"#66FCF1", fontWeight: "bold"}}>Dashboard</Link>
//             <Link to="/patientform" style={{color:"#66FCF1", fontWeight: "bold"}}>Patient Form</Link>
//             <Link to="/patientview" style={{color:"#66FCF1", fontWeight: "bold"}}>Patient View</Link>
//             <Link to="/doctorview" style={{color:"#66FCF1", fontWeight: "bold"}}>Doctor View</Link>
//             <Link to="/profile">Profile</Link>
//         </Navigation>
//     </Drawer>
//     <Content>
//         <div className="page-content" />
//         <Main/>
//     </Content>
// </Layout>
// </div>
