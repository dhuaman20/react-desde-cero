import React from 'react';
import "./styles/styles.scss";
import Curso from './Curso';

const App = () => (
 <>
<div className="main-banner img-container" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" src="https://i.pinimg.com/originals/09/eb/2a/09eb2a0df057172facf31015a65382f8.jpg" alt="hola" />
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Cursos de EDteam</p>
        <p> Tu futuro te esta esperando</p>
        <a href="https://ed.team" className="button">Suscribirse</a>
      </div>
    </div>
  </div>
</div>

<br></br>
<div className="ed-grid m-grid-3">

<Curso/>
<Curso/>
<Curso/>

<Curso/>
<Curso/>
<Curso/>

<Curso/>
<Curso/>
<Curso/>

<Curso/>
<Curso/>
<Curso/>


</div>
 </>

)

export default App;