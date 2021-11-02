import React from 'react';
import { Link } from 'react-router-dom';
import imgLogo from '../assets/images/img-dot@2x.png';

export default function RevieMessage(){
    return(
        <div>
        <div style={{position: 'absolute', width: '100vw', height: '35vh', left: 0, bottom: 0, background: '#EDF6FF'}}>
        </div>
        <div className="container" style={{position: 'relative'}}>
          <div className="row">
            <div className="col-sm-12 col-lg-7" style={{margin: 'auto'}}>
              <div className="d-flex align-items-center" style={{height: '100vh'}}>
                <div className="card" style={{width: '100%', borderRadius: 10}}>
                  <div className="card-body" style={{padding: 50}}>
                    <table className="cust-text-regular">
                      <tbody><tr>
                          <td>Full Name</td>
                          <td>:</td>
                          <td id="fname">Mike Wazowski</td>
                        </tr>
                        <tr>
                          <td>Email Address</td>
                          <td>:</td>
                          <td id="email">mr.wazowski@email.com</td>
                        </tr>
                        <tr>
                          <td>Phone Number</td>
                          <td>:</td>
                          <td id="phone">081234567890</td>
                        </tr>
                        <tr>
                          <td>Nationality</td>
                          <td>:</td>
                          <td id="nationality">Indonesian</td>
                        </tr>
                      </tbody></table>
                    <p className="fst-italic mt-4">
                      Hi Anne, I’m Mike from Monsters, Inc. I’ve seen your previous project and it was really amazing. And as you know our company are planning to build new mobile application. I hope you can join us to develope this application. We look forward to hearing
                      from you and hope you’ll join our project!
                    </p>
                    <hr width="50%" style={{margin: 'auto', marginTop: 76}} />
                    <p className="mt-4 cust-text-regular" style={{fontSize: 20}}>
                      Thanks for contacting us! <br /> We will be in touch with you shortly.
                    </p>
                    <Link href="home.html" className="cust-btn-primary">Home</Link>
                  </div>
                </div>
                <img src={imgLogo} alt="logo" style={{marginTop: 550, marginLeft: '-850px'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}