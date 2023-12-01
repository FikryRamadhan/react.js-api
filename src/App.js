import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import HomeComponent from './components/HomeComponent';
import AddComponent from './components/AddComponent';

export default class App extends Component {
  render() {
    return (
      <Router >
        <div className="App">
          <div className='header'>
            <NavbarComponent />
          </div>
          <Container fluid className="mt-5">
            <Routes>
              <Route exact path="/" element={<HomeComponent />}/>
              <Route exact path="/add-data" element={<AddComponent />}/>
            </Routes>
          </Container>
        </div>
      </Router >
    )
  }
}
