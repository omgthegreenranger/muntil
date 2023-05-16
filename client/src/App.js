import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout } from './components/layout.jsx';
// import { run as runHolder } from 'holderjs/holder';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  
    return (
      <div className="d-flex" fluid>
          <Layout />
      </div>
    );
  }


