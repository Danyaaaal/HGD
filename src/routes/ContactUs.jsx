import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./ContactUs.css";
function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., sending data to backend or displaying a confirmation message
    console.log(formData);
    alert("submitted successfully!");
    // You can reset the form data if needed
    setFormData({
      name: "",
      email: "",
      mobile: "",
      message: "",
    });
  };
  return (
    <>
      <div>
        <h1>Contact Us</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="mobile">Mobile Number:</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">How can we help you?</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div>
        <h1></h1>
      </div>
        <div className="icon">
          <p>
            These are our GitHub links <FontAwesomeIcon icon={faGithub} />
          </p>
        </div>
      <div className="github-links">
        <div>
          <a
            href="https://github.com/Danyaaaal"
            target="_blank"
            className="github-link"
          >
            Danyal Alikhany
          </a>
        </div>
        <div>
          <a
            href="https://github.com/ckdonah"
            target="_blank"
            className="github-link"
          >
            Godwin
          </a>
        </div>
        <div>
          <a
            href="https://github.com/Hassanmohsini"
            target="_blank"
            className="github-link"
          >
            Hassan Mohsini
          </a>
        </div>
      </div>
    </>
  );
}
export default ContactUs;