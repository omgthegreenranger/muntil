import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout } from './components/layout.jsx';
// import { run as runHolder } from 'holderjs/holder';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    const [modalUp, setModalUp] = useState({show: false, select: ""});

    return (
      <div className="d-flex">
          <Layout modalUp = {modalUp} setModalUp={setModalUp} />
      </div>
    );
  }


