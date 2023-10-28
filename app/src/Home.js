import React from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import {MyCustomComponent, MyCustomerTag} from "./MyCustomComponent";

const Home = () => {
  return (
    <div>
      <AppNavbar/>
      <Container fluid>
        <Button color="link"><Link to="/groups">Manage JUG Tour</Link></Button>
        <div style={{border: "1px solid #222", display: "flex"}}>
            <div style={{width: "400px", backgroundColor: "green", height: "60px"}}>One</div>
            <div style={{width: "400px", backgroundColor: "yellow", height: "60px"}}>Two</div>
            <div style={{width: "400px", backgroundColor: "red", height: "60px"}}>Three</div>
            <div style={{width: "400px", backgroundColor: "blue", height: "60px"}}>Four1</div>
        </div>
      </Container>
        <MyCustomComponent firstParam={"this is my first param"}/>
    </div>
  );
}

export default Home;