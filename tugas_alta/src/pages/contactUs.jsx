import React from 'react';
import splash from '../assets/images/charles-rRWiVQzLm7k-unsplash.jpg';
import logoAlta from '../assets/images/logo-ALTA@2x.png';

export default function ContactUs(){
    return(
        <div>
  <img src={splash} className="rounded float-start" id="color-overlay" alt="splash" style={{width: 500}} />
  <div className="position-absolute"> 
    <img src={logoAlta} alt="logo" style={{marginLeft: 100, marginTop: 250}} />
  </div>
  <div className="container">
    <form action="review_message.html" className="needs-validation" noValidate>
      <h1 className="medium-text" style={{marginLeft: 450, fontSize: 50}}>Contact Us</h1>
      <div className="row g-3 align-items-center" style={{marginLeft: 450}}> 
        <label className="medium-text">Full Name <span className="text-danger font-weight-bold">*</span></label><br />
        <input type="text" className="me-text" id="fname" name="fname" placeholder="Your Full Name Here..." required />
        <div className="valid-feedback">
          Looks good!
        </div>
        <div className="invalid-feedback">
          Full name cannot be empty.
        </div>
        <br />
      </div>
      <div className="row g-3 align-items-center" style={{marginLeft: 450}}>
        <label className="medium-text">Email Address <span className="text-danger font-weight-bold">*</span></label><br />    
        <input type="text" className="me-text" id="email" name="email" placeholder="example@domain.com" required />
        <div className="valid-feedback">
          Looks good!
        </div>
        <div className="invalid-feedback">
          Full name cannot be empty.
        </div>
        <br />
      </div>
      <div className="row g-3 align-items-center" style={{marginLeft: 450}}>
        <label className="medium-text">Phone Number <span className="text-danger font-weight-bold">*</span></label><br />
        <input type="text" className="me-text" id="phone" name="phone" placeholder="08573890xxxx" required />
        <div className="valid-feedback">
          Looks good!
        </div>
        <div className="invalid-feedback">
          Full name cannot be empty.
        </div>
        <br />
      </div>
      <div className="row g-3 align-items-center" style={{marginLeft: 450}}>
        <label htmlFor="nationality" className="medium-text">Nationality</label><br />
        <select className="me-text" name="nationality">
          <option className="me-text2" value="selected" disabled>Selected</option>
          <option className="me-text2" value="indonesian">Indonesian</option>
          <option className="me-text2" value="united kingdom" selected>United Kingdom</option>
          <option className="me-text2" value="saudi arabia">Saudi Arabia</option>
        </select>
        <br />
      </div>
      <div className="row g-3 align-items-center" style={{marginLeft: 450}}>
        <label className="medium-text">Message</label><br />
        <textarea name="message" id="message" rows={6} cols={70} className="me-text" placeholder="type your message" defaultValue={""} />
        <br /><br />
        <button className="btn button4" type="submit" style={{width: 100}}>Submit</button>
      </div>
    </form>
  </div>
</div>

    );
}