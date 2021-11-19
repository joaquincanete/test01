import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'

function App() {
  return (
    <div className="App">
      <img src={logo} className="img" alt="Curso Profesional Full Stack" />
      <h1>Trabajo Practico Final Unidad 01</h1>
      <h3>Alumno: Cañete Joaquin</h3>
      <Form />
    </div>
  );
}

export default App;