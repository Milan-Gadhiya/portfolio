import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const Results = () => {
  return (
    <p>Your message has been successfully sent. I will contact you soon.</p>
  );
};

export default function ContactComponent(props) {
  const [result, showResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yay1oga", "template_c8ydebl", e.target, "SZkl6GqLX8RRqqCW5")
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  // Hide Result
  setTimeout(() =>{
    showResult(false)
  }, 5000)

  return (
    <form action="" onSubmit={sendEmail}>
      <div className="formWord">
        <h2>Say Hello!</h2>
        <span>Full Name</span>
        <br />
        <input className="input100" type="text" name="fullName" required />
        <br />
        <span>Phone Number</span>
        <br />
        <input className="input100" type="text" name="phone" required />
        <br />
        <span>Enter Email</span>
        <br />
        <input className="input100" type="text" name="email" required />
        <br />
      </div>
      <div className="formWord">
        <span>Message</span>
        <br />
        <textarea name="message" required></textarea>
        <br />
        <button>SUBMIT</button>

        <div className="row">{result ? <Results /> : null}</div>
      </div>
    </form>
  );
}
