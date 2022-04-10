import React from "react";
import "./contactform.css";
const ContactForm = () => {
  return (
    <div className="contact-form">
      {/* left side */}
      <div className="c-left">
        <span>Get in touch</span>
        <span>Contact me</span>
      </div>
      {/* right side */}
      <div className="c-right">
        <form action="">
          <input type="email" className="user" placeholder="Name" />
          <input type="password" className="user" placeholder="Email" />
          <textarea
            name="details"
            id="details"
            cols="30"
            rows="3"
            placeholder="Message"
            className="user"
          ></textarea>
          <button className="button contact-button">Contact</button>
        </form>

        <div
          className="blur c-blue"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default ContactForm;
