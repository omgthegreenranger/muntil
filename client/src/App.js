import React, { useState } from 'react';
import './App.css';
import { Layout } from './components/layout.jsx';
// import { run as runHolder } from 'holderjs/holder';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  // set State for Modal - might not need to be in App.js
    const [modalUp, setModalUp] = useState(false);

    return (
      <div>
          <Layout modalUp = {modalUp} setModalUp={setModalUp} />
      </div>
    );
  }


