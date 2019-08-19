import React from 'react';
import './App.css';
// import 'normalize.css/normalize.css';
// import './styles/styles.scss';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/Main';
import { useAuth0 } from './react-auth0-wrapper';
import Loading from "./components/Loading";

function App() {

  const { loading, isAuthenticated, logout } = useAuth0();

  if (loading) {
    return (
      <Loading />
    );
  }
  return (
    <div>
      {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
      <div className="demo-big-content">
        <Layout>
            {isAuthenticated && (
                <div>
                    <Header className="header-color" style={{color:"#66FCF1", fontWeight: "bold"}} title= {<Link to="/">KeyWatch</Link>} scroll>
                        <Navigation>
                            <Link to="/dashboard"  style={{color:"#66FCF1", fontWeight: "bold"}}>Dashboard</Link>
                            <Link to="/patientform" style={{color:"#66FCF1", fontWeight: "bold"}}>Patient Form</Link>
                            {/*<Link to="/patientview" style={{color:"#66FCF1", fontWeight: "bold"}}>Patient View</Link>*/}
                            {/*<Link to="/doctorview" style={{color:"#66FCF1", fontWeight: "bold"}}>Doctor View</Link>*/}
                            <Link to="/login" onClick={() => logout()} style={{color:"#66FCF1", fontWeight: "bold"}}>Log Out</Link>
                        </Navigation>
                    </Header>
                    <Drawer title="KeyWatch" style={{color:"#66FCF1", backgroundColor:"#1F2833"}}>
                        <Navigation>
                            <Link to="/dashboard" style={{color:"#66FCF1", fontWeight: "bold"}}>Dashboard</Link>
                            <Link to="/patientform" style={{color:"#66FCF1", fontWeight: "bold"}}>Patient Form</Link>
                            <Link to="/patientview" style={{color:"#66FCF1", fontWeight: "bold"}}>Patient View</Link>
                            <Link to="/doctorview" style={{color:"#66FCF1", fontWeight: "bold"}}>Doctor View</Link>
                            <Link to="/login" onClick={() => logout()} style={{color:"#66FCF1", fontWeight: "bold"}}>Log Out</Link>
                        </Navigation>
                    </Drawer>
                </div>
            )}
            <Content>
                <Main/>
            </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
