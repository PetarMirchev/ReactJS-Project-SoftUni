import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import { ContactBanner } from './Banner/ContactBanner';
import GoogleMap from './GoogleMap';

const ContactPage = () => {
  return (
    <div>
        <ContactBanner/>
        <ContactForm/>
        <GoogleMap/>
    </div>
  )
}

export default ContactPage