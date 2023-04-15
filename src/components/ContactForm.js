import React, { useState, useRef } from "react";
import Modal from "./Modal";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const thankyou = (
    <>
      <h2>Thank you for your message!</h2>
      <p>
        If all your details are correct, I will reach out to you as soon as
        possible. I respond within 24 hours or at least by the end of the coming
        weekend.
      </p>
    </>
  );

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // add code here to submit the form to your backend
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const handleClear = () => {
    form.current.reset();
  };

  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="card-container">
      <div className="card">
        <h2 className="card-header">Say Hi!</h2>
        <form ref={form} onSubmit={handleSubmit} className="card-body">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Sundar Pichai"
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="sundar@google.com"
              required
            />
          </div>
          <div className="form-group">
            <label>Subject:</label>
            <input
              type="text"
              name="subject"
              placeholder="Work with us!"
              required
            />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea
              name="message"
              placeholder="We want to hire you. Send your resume and we will discuss the salary later."
              required
              rows="5"
              style={{ margin: "1em 0" }}
            />
          </div>
          <div className="form-group">
            <button type="submit" onClick={handleButtonClick}>
              Submit
            </button>
            <button
              type="button"
              onClick={handleClear}
              style={{ backgroundColor: "#810d0d" }}
            >
              Clear
            </button>
          </div>

          {showModal && <Modal onClose={handleCloseModal} content={thankyou} />}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
