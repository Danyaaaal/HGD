import React from "react";
import godwin from "../assets/godwin.jpeg";
import danyal from "../assets/danyal.jpg";
import hassan from "../assets/Hassan.jpg";
import "./AboutUs.css"; 

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About Us</h1>
      </div>


      <div className="team-collaboration-overview">
        <h3>Team Collaboration Overview:</h3>
        <p>
          As a cohesive team passionate about revolutionizing communication, we
          combine our diverse skill sets and shared enthusiasm for web
          development to create cutting-edge text-to-speech and speech-to-text
          converters. With a foundation built on HTML, CSS, JavaScript, and
          React, supplemented by ongoing learning through DCI, we're dedicated
          to delivering seamless, user-centric solutions that redefine
          accessibility and convenience in digital communication.
        </p>
      </div>     
       <div className="team-names-container">
      <div className="card">
        <h4>Danyal Alikhany</h4>
        <img src={danyal} alt="Danyal" />
        <p>
          Danyal Alikhany, our creative powerhouse, transforms concepts into
          captivating digital experiences. With expertise in React, Bootstrap,
          and SCSS, he crafts visually stunning interfaces that seamlessly
          integrate with our text-to-speech and speech-to-text converters.
          Danyal's commitment to user-centric design ensures our solutions are
          not only aesthetically pleasing but also intuitive to navigate.
        </p>
      </div>
      <div className="card">
        <h4>Godwin Onah</h4>
        <img src={godwin} alt="Godwin" />
        <p>
          Our seasoned full-stack developer, brings unparalleled expertise in
          HTML, CSS, and JavaScript to our team. His meticulous coding approach
          guarantees the flawless functionality of our text-to-speech and
          speech-to-text converters across all platforms. Though humble in
          demeanor, Godwin's contributions are monumental, driving our team
          towards excellence with every line of code he writes.
        </p>
        
      </div>
      <div className="card">
        <h4>Abdul Hassan Mohsini</h4>
        <img src={hassan} alt="Hassan" />
        <p>
          Abdul Hassan Mohsini infuses our projects with meticulous attention to
          detail honed through years of full-stack web development. Proficient
          in HTML, CSS, and JavaScript, Abdul ensures flawless execution of our
          text-to-speech and speech-to-text solutions, delivering captivating
          user interfaces that prioritize both aesthetics and functionality.
        </p>
        
      </div>
      </div>
    </div>
    
  );
}

export default AboutUs;
