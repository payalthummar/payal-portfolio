import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [answer, setAnswer] = useState();
  const [num1, setNum1] = useState(Math.floor(Math.random() * 25));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 25));

  const refresh = (e) => {
    e.preventDefault();
    setNum1(Math.floor(Math.random() * 15));
    setNum2(Math.floor(Math.random() * 15));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(answer, num1, num2);
    if (parseInt(answer) === num1 + num2) {
      emailjs
        .sendForm(
          `${process.env.REACT_APP_SERVICE_ID}`,
          `${process.env.REACT_APP_TEMPLATE_ID}`,
          form.current,
          `${process.env.REACT_APP_USER_ID}`
        )
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset();
            setSubmitted(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      alert("Ups, wrong answer.");
    }
  };

  return (
    <section id="contact">
      <p>Get in Touch</p>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <a
              href="mailto:payalthummar1994@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i className="fa fa-envelope fa-3x" aria-hidden="true"></i>
              <br />
              <strong>
                <h3>
                  <p>Email me </p>
                </h3>
              </strong>
              <h4>payalthummar1994@gmail.com</h4>
            </a>
          </article>

          <article className="contact__option">
            <a
              href="https://www.linkedin.com/in/payalthummar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i
                className="fa fa-linkedin-square fa-3x"
                aria-hidden="true"
              ></i>{" "}
              <br />{" "}
              <strong>
                <h3>
                  <p>Message me </p>
                </h3>
              </strong>
              <h4>linkedin.com/payalthummar</h4>
            </a>
          </article>
          <article className="contact__option">
            <a
              href="https://www.xing.com/profile/Payal_Thummar2/cv"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i
                className="fa fa-linkedin-square fa-3x"
                aria-hidden="true"
              ></i>{" "}
              <br />{" "}
              <strong>
                <h3>
                  <p>Message me </p>
                </h3>
              </strong>
              <h4>xing.com/Payal_Thummar</h4>
            </a>
          </article>
        </div>

        <form action="" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Your Full Name"
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <label>Message</label>
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <div className="captcha">
            <p>
              {" "}
              {num1}+{num2}?
            </p>{" "}
            <button className="btn refresh" onClick={refresh}>
              <i class="fa fa-refresh" aria-hidden="true"></i>
            </button>{" "}
          </div>
          <input
            type="number"
            onChange={(e) => setAnswer(e.target.value)}
          ></input>
          <input type="submit" className="btn btn-primary" value="Send"></input>
          {submitted && (
            <p>
              Thank you for contacting me! I will get back to you as soon as
              possible.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
