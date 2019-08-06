import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Chip, Textfield } from 'react-mdl';
// import Dashboard from './components/Dashboard';
import { Link } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <div>
      {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
      <div className="demo-big-content">
        <Layout>
            <Header className="header-color"title="Welcome!" scroll>
                <Navigation>
                    <Link to="/">Dashboard</Link>
                    <Link to="/patientform">PatientForm</Link>
                    <Link to="/patientview">PatientView</Link>
                    <Link to="/doctorview">DoctorView</Link>
                </Navigation>
            </Header>
            <Drawer title="KeyWatch">
                <Navigation>
                    <Link to="/">Dashboard</Link>
                    <Link to="/patientform">PatientForm</Link>
                    <Link to="/patientview">PatientView</Link>
                    <Link to="/doctorview">DoctorView</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
