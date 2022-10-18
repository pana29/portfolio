import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5bns1yb',
        'template_xgs8g4j',
        form.current,
        'XHRtGzQPX981_4exr'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div name="contact" className="contact">
      <form onSubmit={sendEmail} ref={form} method="POST" className="form" data-aos="fade-up">
        <div className="form-info">
          <p className="info-p">Contact</p>
          <p className="info-sub">
            Feel free to contact me by submitting the form below and I will get
            back to you as soon as possible.
          </p>
        </div>
        <div className="all-in-one">
          <div className="toate">
            <div className="div-name-input">
              <input
                type="text"
                placeholder="Enter Name"
                name="from_name"
                className="input-name"
              />
            </div>
            <div className="div-email-input">
              <input
                type="email"
                placeholder="Enter Email"
                name="user_email"
                className="input-email"
              />
            </div>
            <div className="div-msg-input">
              <textarea
                name="message"
                rows="7"
                className="message"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button onSubmit={sendEmail} className="btn-form">
              Send message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
