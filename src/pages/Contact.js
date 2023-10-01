import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="container contact-container">
      <h1>Contact Us</h1>

      <form>
        <div>
          <p>Name</p>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div>
          <p>Email</p>
          <input type="text" placeholder="Enter your email" />
        </div>
        <div>
          <p>Subject</p>
          <input type="text" placeholder="Enter the subject" />
        </div>
        <div>
          <p>Message</p>
          <input type="text" placeholder="Enter your message" />
        </div>

        <button>Send Email</button>
      </form>
    </div>
  );
};

export default Contact;
