import React, { Component } from "react";
import { useAuth0 } from "../react-auth0-wrapper";

import { Link, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TeamPic from "../images/teamAward.jpg";
import TypingDemo from "../images/typingDemo.mp4"

const useStyles = makeStyles({
  banner: {
    backgroundColor: "#1F2833",
    textAlign: "left",
    height: "20vh",
    alignItems: "center",
    color: 'white',
    padding: '20px'
  },
  aboutBody: {
    padding: '20px',
  },
  aboutButton: {
    background: "#fcae66",
    border: 0,
    borderRadius: 3,
    color: "#1F2833",
    height: 48,
    width: 120,
    margin: "10px",
    font: '32px'
  },
  aboutTeamImage: {
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '5px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '60%'
  },
  aboutDemo: {
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '5px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%'
  }

});
const About = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.banner}>
                <h1><b>Keywatch</b></h1>
                <h5><b>Contributing Members</b>: Hoyt Gong, Michelle Hsieh, Kevin Li, Vicki Lu, and Jackie Peng</h5>
            </div>
            <Button
                variant="contained"
                className={classes.aboutButton}
                onClick={() => window.location.href = '/'}
            >
            <b>← Back</b>
            </Button>
            <div className={classes.aboutBody}>
                <h4><b>Team</b></h4>
                <p>This project was created at the MIT Hackathon in DC, during August of 2019. 
                The team is comprised of 5 summer interns at <b>GlaxoSmithKline</b>, all working within the Core Tech team 
                but in different roles. With interests ranging from biomedical sciences and healthcare to software 
                and data science, we decided to combine these fields to build this project. We were fortunate to 
                have been awarded the <i>Breakthrough that Matters</i> award from the main sponsor of the event, <b>Samsung</b>, 
                and also given the opportunity to showcase our work througb blog posts and company talks. 
                We also had a honorary member in twelve-year old Sophia, who was curious and bold enough to ask and join our team.</p>
            </div>
            <figure>
                <img src={TeamPic} className={classes.aboutTeamImage} alt="team" />
                <div style={{paddingLeft: '20%'}}><i><b>Left to Right</b>: Vicki Lu, Jackie Peng, Sophia (honorary member), Kevin Li, Michelle Hsieh, Hoyt Gong</i></div>
            </figure>

            <div className={classes.aboutBody}>
                <h4><b>Background</b></h4>
                <p className={classes.aboutTeamP}>KeyWatch is a continuous monitoring platform that helps doctors diagnose the 600,000 annual patients suffering from Parkinsonism symptoms, 
                such as tremoring and bradykinesia (slowness in movement), by analyzing longitudinal changes 
                in typing patterns and hand movement. Diseases underlying Parkinsonism symptoms include not only Parkinson's Disease (PD), 
                but several other underlying classes of diseases, such as Drug-Induced Parkinsonism (DIP), Progressive Supranuclear Palsy (PSP), 
                and Multiple System Atrophy (MSA). These various classes of diseases all require different treatment plans, 
                so it is extremely important for doctors to not only make the correct diagnosis, 
                but also be able to monitor their patient's symptoms over time and adjust the treatment plan accordingly. </p>

                <p>Current prognosis measures include weekly or sometimes even monthly check-ups with the physician, 
                not to mention the initial wait-time to schedule an appointment with a neurologist that could span 
                2-3 months. <b>Keywatch</b> allows doctors to get feedback on the severity of 
                the patients' symptoms over time, and is comprised of four core parts: </p>
                <ol>
                    <li>A smart-watch with built-in accelerometer for monitoring hand movements</li>
                    <li>A Chrome extension that collects patient keyboard typing data, such as hold time and latency </li>
                    <li>An API to store the data in a database and retrieve the data </li>
                    <li>A front-end web app to visualize the data </li>
                </ol>

                <p> Previous research shows that typing patterns in individuals with Parkinsonism symptoms and individuals 
                without are statistically different. The difficult part, however, is to build a model that 
                can discern the two groups. We aim to extract key features from keyboard typing patterns, such as hold time 
                (how long a key is held) and latency (time between each key press), to build a robust model that can 
                help aid doctors in their diagnoses.</p>
            </div>

            <div className={classes.aboutBody}>
                <h4><b>Set Up</b></h4>
                <p>If it sounds complicated, don't worry. It takes <b>&lt; 5 minutes</b> to get started!</p>
                <p>To set up the application, please do the following:</p>
                <ol>
                    <li>Download/clone the <a href="https://github.com/loafyyy/KeyWatch-Chrome-extension">Chrome Extension repository</a> and follow the instructions in the README</li>
                    <li>Download/clone the <a href="https://github.com/loafyyy/KeyWatch-backend">Backend API repository</a> and follow the instructions in the README</li>
                </ol>
            </div>

            <div className={classes.aboutBody}>
                <h4><b>Demo</b></h4>
                <p>Shown below is a live-demo of the application.</p>
                <video width="400" controls className={classes.aboutDemo}>
                <source src={TypingDemo} type="video/mp4" />
                </video>
            </div>


        </div>
    )
}

export default About
