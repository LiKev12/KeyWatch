import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import PatientForm from './PatientForm';
import PatientView from './PatientView';
import DoctorView from './DoctorView';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/patientform" component={PatientForm} />
        <Route path="/patientview" component={PatientView} />
        <Route path="/doctorview" component={DoctorView} />
    </Switch>
)

export default Main;

