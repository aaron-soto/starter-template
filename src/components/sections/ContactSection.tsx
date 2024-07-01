'use client';

import React, { useState } from 'react';

import SectionHeading from '../style-components/SectionHeading';
import ContactForm from '../ContactForm';

const ContactSection = () => {
  return (
    <div className="container py-20">
      <SectionHeading
        title="Contact our team"
        description="Got any questions about our platform? We're here to help. Chat to
        us and get those questions answered!"
      />
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
