import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
// import Dashboard from './components/Dashboard';
import { Link } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <div>
      {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
      <div className="demo-big-content">
        <Layout>
            <Header className="header-color" style={{color:"#66FCF1"}} title= 'Welcome to KeyWatch' scroll>
                <Navigation>
                    <Link to="/"  style={{color:"#66FCF1", fontWeight: "bold"}}>Dashboard</Link>
                    <Link to="/patientform" style={{color:"#66FCF1", fontWeight: "bold"}}>Patient Form</Link>
                    <Link to="/patientview" style={{color:"#66FCF1", fontWeight: "bold"}}>Patient View</Link>
                    <Link to="/doctorview" style={{color:"#66FCF1", fontWeight: "bold"}}>Doctor View</Link>
                </Navigation>
            </Header>
            <Drawer title="KeyWatch" style={{color:"#66FCF1", backgroundColor:"#1F2833"}}>
                <Navigation>
                    <Link to="/" style={{color:"#66FCF1", fontWeight: "bold"}}>Dashboard</Link>
                    <Link to="/patientform" style={{color:"#66FCF1", fontWeight: "bold"}}>Patient Form</Link>
                    <Link to="/patientview" style={{color:"#66FCF1", fontWeight: "bold"}}>Patient View</Link>
                    <Link to="/doctorview" style={{color:"#66FCF1", fontWeight: "bold"}}>Doctor View</Link>
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
