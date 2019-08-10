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
            <Header className="header-color" style={{color:"#66FCF1"}} title= 'Welcome' scroll>
                <Navigation>
                    <Link to="/"  style={{color:"#66FCF1"}}>Dashboard</Link>
                    <Link to="/patientform" style={{color:"#66FCF1"}}>Patient Form</Link>
                    <Link to="/patientview" style={{color:"#66FCF1"}}>Patient View</Link>
                    <Link to="/doctorview" style={{color:"#66FCF1"}}>Doctor View</Link>
                </Navigation>
            </Header>
            <Drawer title="KeyWatch">
                <Navigation>
                    <Link to="/">Dashboard</Link>
                    <Link to="/patientform">Patient Form</Link>
                    <Link to="/patientview">Patient View</Link>
                    <Link to="/doctorview">Doctor View</Link>
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
