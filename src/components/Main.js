import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import PatientForm from './PatientForm';
import PatientView from './PatientView';
import DoctorView from './DoctorView';
import LoginPage from './LoginPage';
import PrivateRoute from './PrivateRoute';
import About from './About';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/about" component={About} />
        <PrivateRoute path="/patientform" component={PatientForm} />
        <PrivateRoute path="/patientview" component={PatientView} />
        <PrivateRoute path="/doctorview" component={DoctorView} />
        <PrivateRoute path="/dashboard" component= {Dashboard} />
        <PrivateRoute path="/profile" component= {Dashboard} />
    </Switch>
)

export default Main;

