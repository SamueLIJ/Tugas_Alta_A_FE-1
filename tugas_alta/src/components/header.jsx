import React from 'react';
import { useNavigate } from 'react-router-dom';

import logoAlta from '../assets/images/logo-ALTA.png';


export default function Header(){
  const navigate = useNavigate();
  const linkToContact = () => navigate("/contact_us");
  const linkToNews = () => navigate("/news_app");
  const linkToHome = () => navigate("/");
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
          <a className="nav-link active" href="/landing" onClick={linkToHome} aria-current="page" href="#" >
            Home
          </a>
          </li>
          <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" >
            About
          </a>
          </li>
          <li className="nav-item">
          <a className="nav-link active" href="/news_app" onClick={linkToNews} aria-current="page" href="#" >
            News App
          </a>
          </li>
          <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" >
            Experience
          </a>
          </li>
          <li className="nav-item">
          <a className="nav-link active" href="/contact_us" onClick={linkToContact} aria-current="page" href="#" >
            Contact Us
          </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

    );
}