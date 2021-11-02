import React from 'react';
import { Link } from 'react-router-dom';
import logoAlta from '../assets/images/logo-ALTA.png';


export default function header(){
    return (
        <header>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <span className="navbar-brand" href="#">
        <img src={logoAlta} alt="logo" width="150px" height="50px" style={{marginLeft: 30, paddingLeft: 50}} />
      </span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto my-4 my-lg-0" style={{marginRight: 15}}>
          <li className="nav-item">
            <Link className="nav-link active medium-text med-text" aria-current="page" style={{color: '#19345e'}} href="#">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link medium-text med-text" style={{color: '#19345e'}} href="#">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link medium-text med-text" style={{color: '#19345e'}} href="#">Experience</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link medium-text med-text" to="contact_us" style={{color: '#19345e'}} >contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

    );
}