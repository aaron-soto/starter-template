import ContactForm from '@/components/ContactForm';
import React from 'react';

const Page = () => {
  return (
    <div className="container py-20">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-sm text-black/60">
          If you have any further questions this website did not answer, feel
          free to reach out and we will get back to you as soon as possible!
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Page;
