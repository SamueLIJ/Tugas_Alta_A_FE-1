import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import splash from '../assets/images/charles-rRWiVQzLm7k-unsplash.jpg';
import logoAlta from '../assets/images/logo-ALTA@2x.png';
import { createContact } from '../store/contactSlice';

const ContactUs=()=>{  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    phone: "",
    nationality: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createContact(formData));
    navigate("/review_message");
  };
  return (
    <div>
      <div>
        <img
          src={splash}
          className="rounded float-start"
          class="color-overlay"
          alt="splash"
          style={{ width: 500 }}
        />
        <div className="position-absolute">
          <img src={logoAlta} alt="logo-alta" style={{ marginLeft: 100, marginTop: 250 }}
          />
        </div>
        <div className="container">
          <form action="review_message.html"
                  className="needs-validation was-validated"
                  onSubmit={handleSubmit}>
            <h1 className="medium-text" style={{ marginLeft: 450, fontSize: 50 }}> Contact Us </h1>
            <div
              className="row g-3 align-items-center"
              style={{ marginLeft: 450 }}
            >
              <label className="medium-text" htmlFor="fname"> Full Name
              <span className="text-danger font-weight-bold">*</span>
              </label>
              <br />
              <input type="text" className="me-text form-control" name="fname" id="fname" onChange={handleChange}
                value={formData.fname} placeholder="Your Full Name Here..." required />
                <div className="valid-feedback"> Looks good! </div>
                <div className="invalid-feedback"> Full name cannot be empty. </div>
              <br />
            </div>
            <div className="row g-3 align-items-center" style={{ marginLeft: 450 }}>
              <label className="medium-text" htmlFor="email">  Email Address{" "}
                <span className="text-danger font-weight-bold">*</span>
              </label>
              <br />
              <input type="text" className="me-text form-control" name="email" id="email" onChange={handleChange}
              value={formData.email} placeholder="example@domain.com" required />
              <div className="valid-feedback"> Looks good! </div>
              <div className="invalid-feedback"> Email cannot be empty. </div>
              <br />
            </div>
            <div
              className="row g-3 align-items-center"
              style={{ marginLeft: 450 }}
            >
              <label className="medium-text" htmlFor="phone">
              Phone Number{" "}
                <span className="text-danger font-weight-bold">*</span>
              </label>
              <br />
              <input type="number" className="me-text form-control"name="phone" id="phone" onChange={handleChange}
                value={formData.phone}placeholder="08573890xxxx" required
              />
              <div className="valid-feedback"> Looks good! </div>
              <div className="invalid-feedback"> Phone Number cannot be empty. </div>
              <br />
            </div>
            <div
              className="row g-3 align-items-center"
              style={{ marginLeft: 450 }}
            >
              <label htmlFor="nationality" className="medium-text">
                Nationality
              </label>
              <br />
              <select className="me-text" name="nationality" className="form-select"
                onChange={handleChange} id="nationality" required>
                <option className="me-text2" value="selected" disabled selected>
                  Selected
                </option>
                <option className="me-text2" value="indonesian">
                  Indonesian
                </option>
                <option className="me-text2" value="united kingdom" >
                  United Kingdom
                </option>
                <option className="me-text2" value="saudi arabia">
                  Saudi Arabia
                </option>
              </select>
              <div className="valid-feedback"> Looks good! </div>
              <div className="invalid-feedback"> Please choose the Nationality. </div>
              <br />
            </div>
            <div
              className="row g-3 align-items-center"
              style={{ marginLeft: 450 }}
            >
              <label className="medium-text" htmlFor="message" >Message</label>
              <br />
              <textarea
                name="message"
                id="message"
                rows={6}
                cols={70}
                onChange={handleChange}
                value={formData.message}
                className="me-text"
                placeholder="type your message"
                defaultValue={''}
                placeholder="Your Message"
              />
              <div className="valid-feedback"> Looks good! </div>
              <div className="invalid-feedback"> Message cannot be empty. </div>
              <br />
              <br />
              <button type="submit"class="btn button4"style={{ width: 100 }} onSubmit={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;