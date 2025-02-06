import React from "react";
import ContactForm from "../../component/contactForm/ContactForm";

const Contact = () => {
  return (
    <section
      className="w-full flex  justify-center py-[200px] 
bg-[url('/src/pages/contact/images/images12.png')] bg-no-repeat bg-cover bg-left"
    >
      <ContactForm />
    </section>
  );
};

export default Contact;
