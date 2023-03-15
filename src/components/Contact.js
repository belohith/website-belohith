import { Route, Routes } from "react-router-dom";
import ContactForm from "./ContactForm";
import ContactThankYou from "./ContactThankYou";
import Socials from "./Socials";


function Contact() {
  return (
    <div>
    <ContactForm />
      <Socials />
    </div>
  );
}

export default Contact;
