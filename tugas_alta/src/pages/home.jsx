import React from "react"
import Header from '../components/header';
import Foto from '../assets/images/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg';
import bgImg from '../assets/images/bg-img.png';
import { Link } from 'react-router-dom';

export default function Home (){
  return(
    <div>
      <Header></Header>
      <main>
  <div className="container-fluid">
    <div className="position-absolute">
      <div className="row">
        <div className="col">
          <img src={Foto} alt="foto" className="img" /> 
        </div>
        <div className="col-sm" style={{marginTop: 150}}>
          <h3 className="medium-text" style={{fontSize: 25}}>Hi, my name is</h3>
          <h1 style={{fontSize: 85}} className="bold-text">Anne Sullivan</h1>
          <h2 className="medium-text" style={{fontSize: 25}}>I build things for the web</h2><br />
          <Link className="btn btn-primary button4" to="contact_us" role="button">Get In Touch</Link>
        </div>
      </div>
    </div>
  </div>
  <img src={bgImg} className="img-fluid ms-auto" alt="bg-img" style={{height: 'fit-content'}} /> 
</main>

    </div>
  );
}
