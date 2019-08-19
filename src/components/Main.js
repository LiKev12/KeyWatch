import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import PatientForm from './PatientForm';
import PatientForm2 from './PatientForm2';
import PatientForm3 from './PatientForm3';
import PatientView from './PatientView';
import DoctorView from './DoctorView';
import NavBar from './LoginPage';
import PrivateRoute from './PrivateRoute';
import About from './About';

const Main = () => (
    <Switch>
        <Route exact path="/" component={NavBar} />
        <PrivateRoute path="/patientform" component={PatientForm2} />
        <PrivateRoute path="/patientview" component={PatientView} />
        <PrivateRoute path="/doctorview" component={DoctorView} />
        <PrivateRoute path="/dashboard" component= {Dashboard} />
        <PrivateRoute path="/profile" component= {Dashboard} />
        <Route path="/about" component={About} />
    </Switch>
)

export default Main;

