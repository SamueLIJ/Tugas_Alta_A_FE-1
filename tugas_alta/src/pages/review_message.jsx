import React from 'react';
import imgLogo from '../assets/images/img-dot@2x.png';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
export default function ReviewMessage(){
  const navigate = useNavigate();
  const contact = useSelector((state) => state.contact.data);
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
                          <td id="fname">{contact.full_name}</td>
                        </tr>
                        <tr>
                          <td>Email Address</td>
                          <td>:</td>
                          <td id="email">{contact.email}</td>
                        </tr>
                        <tr>
                          <td>Phone Number</td>
                          <td>:</td>
                          <td id="phone">{contact.phone}</td>
                        </tr>
                        <tr>
                          <td>Nationality</td>
                          <td>:</td>
                          <td id="nationality">{contact.nationality}</td>
                        </tr>
                      </tbody></table>
                    <p className="fst-italic mt-4" id="message" >
                    {contact.message}
                    </p>
                    <hr width="50%" style={{margin: 'auto', marginTop: 76}} />
                    <p className="mt-4 cust-text-regular" style={{fontSize: 20}}>
                      Thanks for contacting us! <br /> We will be in touch with you shortly.
                    </p>
                    <a
                    href="#!"
                    onClick={() => navigate("/")}
                    className="cust-btn-primary"
                  >
                    Home
                  </a>
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