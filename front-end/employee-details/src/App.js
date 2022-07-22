/* eslint-disable react/jsx-pascal-case */
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CreateEmployee from './components/CreateEmployee';
import EmployeeList from './components/EmployeeList';
import { Routes,Route,Link } from "react-router-dom";
//import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to={'/create-emp'} className="nav-link">
                  Welcome to Manos Web Page
              </Link>              
            </Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav>
              <Link to={'/emp-list'} className="nav-link">
                    Employee List
              </Link>
                </Nav>

            </Nav>
          </Container>
        </Navbar>
            
      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
                <Routes>
                  <Route exact path="/" element={<CreateEmployee />}/>
                  <Route exact path="/create-emp" element={<CreateEmployee />}/>
                    
                  <Route exact path="/emp-list" element={<EmployeeList />}/>
                    
                </Routes>
              </div>
          </Col>
        </Row>
      </Container>
    </header>
    
     
  </div>
  );
}

export default App;
