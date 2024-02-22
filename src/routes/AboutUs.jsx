import React from "react";
import godwin from "../assets/godwin.png";
import danyal from "../assets/danyal.jpg";
import hassan from "../assets/Hassan.jpg";
function AboutUs() {
  return (
    <>
      <div>
        <div>
          <h1>About Us Pageeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</h1>
        </div>
        <div>
          <h3>Team Collaboration Overview :</h3>
          <p>
            As a cohesive team passionate about revolutionizing communication,
            we combine our diverse skill sets and shared enthusiasm for web
            development to create cutting-edge text-to-speech and speech-to-text
            converters. With a foundation built on HTML, CSS, JavaScript, and
            React, supplemented by ongoing learning through DCI, we're dedicated
            to delivering seamless, user-centric solutions that redefine
            accessibility and convenience in digital communication.
          </p>
        </div>
        <div>
          <h4>Danyal Alikhany :</h4>
          <p>
            Danyal Alikhany,our creative powerhouse, transforms concepts into
            captivating digital experiences. With expertise in React, Bootstrap,
            and SCSS, he crafts visually stunning interfaces that seamlessly
            integrate with our text-to-speech and speech-to-text converters.
            Danyal's commitment to user-centric design ensures our solutions are
            not only aesthetically pleasing but also intuitive to navigate.
          </p>
        </div>
        <div>
          <h4>Godwin Godwin:</h4>
          <p>
            our seasoned full-stack developer, brings unparalleled expertise in
            HTML, CSS, and JavaScript to our team. His meticulous coding
            approach guarantees the flawless functionality of our text-to-speech
            and speech-to-text converters across all platforms. Though humble in
            demeanor, Godwin's contributions are monumental, driving our team
            towards excellence with every line of code he writes.
          </p>
        </div>
        <div>
          <h4>Abdul Hassan Mohsini:</h4>
          <p>
            Abdul Hassan Mohsini infuses our projects with meticulous attention
            to detail honed through years of full-stack web development.
            Proficient in HTML, CSS, and JavaScript, Abdul ensures flawless
            execution of our text-to-speech and speech-to-text solutions,
            delivering captivating user interfaces that prioritize both
            aesthetics and functionality.
          </p>
        </div>
      </div>
      <div>
        <img src={godwin} alt="Godwin" />
        <img src={hassan} alt="Hassan" />
        <img src={danyal} alt="Danyal" />
      </div>
    </>
  );
}

export default AboutUs;
