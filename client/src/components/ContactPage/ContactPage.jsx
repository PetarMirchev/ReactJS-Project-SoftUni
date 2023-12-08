import React, {useState} from 'react';
import './contact.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const ContactPage = () => {

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    if(formData.email === '' || formData.name === '' || formData.message === ''){
      setErrorMessage(true);
      return;
    }

    try {
       const response = await axios.post('http://localhost:3001/send-email', formData);
       console.log(response.data);

       //logic to handle success or show a thank-you message to the user
       navigate('/');
      
    } catch (error) {
      console.log('Error sending email:', error);
     //show an error message to the user   
    }
  };


  return (
    <div>
        {/* -------------->Banner<----------------------------- */}
        <div className="page-heading about-page-heading" id="top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inner-content">
                            <h2>Contact Us</h2>
                            <p className='message'>Awesome, clean &amp; creative HTML5 Template</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* ---------------------------->googleMaps location <------------------------ */}
        <div className="contact-us">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div id="map">
                          <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90186.37207676383!2d-80.13495239500924!3d25.9317678710111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad1877e4a82d%3A0xa891714787d1fb5e!2sPier%20Park!5e1!3m2!1sen!2sth!4v1637512439384!5m2!1sen!2sth" 
                            width="100%" 
                            height="400px" 
                            frameBorder="0" 
                            style={{border:"0"}} 
                            allowFullScreen>
                          </iframe>
                         
                          
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="section-heading">
                            <h2 id='fix-h2-tag'>Say Hello. Don't Be Shy!</h2>
                            <p id='fix-span-tag'>Sey what makes Hexashop different from the other? Or just want to ask us something? </p>
                        </div>


                        <form id="contact" onSubmit={handleSubmit} >
                            <div className="row">
                              <div className="col-lg-6">
                                <fieldset>
                                  <input 
                                    name="name" 
                                    type="text" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    id="name" 
                                    placeholder="Your name"
                                    pattern='^[a-zA-Z0-9_-]{3,20}$'
                                    required
                                  />
                                </fieldset>
                              </div>
                              <div className="col-lg-6">
                                <fieldset>
                                  <input 
                                    name="email" 
                                    type="text" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    id="email" 
                                    placeholder="Your email"
                                    pattern="^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$"
                                    required
                                  />
                                </fieldset>
                              </div>
                              <div className="col-lg-12">
                                <fieldset>
                                  <textarea 
                                  name="message" 
                                  rows="6" 
                                  id="message" 
                                  value={formData.message}
                                  onChange={handleChange}
                                  placeholder="Your message" 
                                  required></textarea>
                                </fieldset>
                              </div>
                              <div className="col-lg-12">
                                  <button type="submit" id="form-submit" className="main-dark-button">Send</button>
                              </div>
                              {errorMessage && (<p className='user-alert-form-message'>All fields are required! Please input correct information!</p>)}
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactPage