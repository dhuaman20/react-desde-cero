import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';


//import './index.css';
//import App from './App';  render mostrar un html o algo?
const root =document.getElementById("root")

//const elemento=React.createElement(componente , propiedades, hijos)
//const elemento=React.createElement("H1" , {className: "saludo"}, "Hola Mundo")
// en el render te muestra en la web 

ReactDOM.render(<App /> ,root);
