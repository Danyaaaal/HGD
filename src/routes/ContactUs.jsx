
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:7000/contact", formData);
      console.log(response.data); // Log response from the backend
  
      alert("Submitted successfully!");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: ""
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="contact-container">

        <div className="contact-title">
          <h1>Contact Us</h1>
        </div>

        <div className="contact-form">
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
                autoFocus={true}
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
