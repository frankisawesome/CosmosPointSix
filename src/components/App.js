//React, router and hooks
import React from 'react';
import { useState } from 'react';

//Css and bootstrap
import '../css/App.css';
import Card from 'react-bootstrap/Card';

//Components
import { AppForm } from './Form';
import { Result } from './Result'



function App() {
  //Hooks that manage main states
  const [render, setRender] = useState('form'); //Determines if the form or results is rendered
  const [loading, setLoading] = useState(false); //if currently loading
  const [data, setData] = useState(null); //Stores the array of messages
  const [err, setErr] = useState(null);

  //Props to allow components to change the main states
  const controlProps = {
    setRender: setRender,
    setLoading: setLoading,
    setData: setData,
    setErr: setErr
  }


  return (
    <div className="App">
      <Card>
        <Card.Header>Three Point Six</Card.Header>
        {(render === 'form') ? <AppForm {...controlProps} /> : <Result {...controlProps} data={data} err = {err} loading = {loading}/>}
        <p>A little experimental MERN stack app by Frank Li and Sebastian Muir-Smith @ QUT, Brisbane</p>
      </Card>
    </div>
  );
}

export default App;
