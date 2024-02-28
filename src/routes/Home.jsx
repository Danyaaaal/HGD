import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
function Home() {
  return (
      <>
          <div className="home-container">

            <div className="home-hero">
              <h1> Welcome To Our Revolutionary Apps</h1>

            </div>

              <div className="home-goal">
                  <h3>Goal</h3>
                  <p>
                      They are designed to enhance communication experiences
                      between the people especially disabled.
                  </p>
                  
              </div>

              <div className="home-apps">
                  <div className="home">
                      <h3>Text-to-Speech Converter</h3>
                      <p>
                          It is the powerful tool that put the power
                          ofcommunication firmly in your hands. With our
                          Text-to-Speech Converter, transform written words
                          into spoken language with remarkable clarity and
                          naturalness. Whether you're a student, professional,
                          or anyone looking to engage with content in a new
                          way, our app empowers you to listen to articles,
                          emails, documents, and more, seamlessly converting
                          text into lifelike speech.
                      </p>

                      <Link to={"/app/text-to-speech"}>Go to App</Link>
                  </div>
                  <div className="home">
                      <h3>Speech-to-Text Converter</h3>
                      <p>
                          Conversely, our Speech-to-Text Converter allows you
                          to change your speech to text. Simply speak into
                          your device, and watch as your words are transcribed
                          into text in real-time. Perfect for meetings,
                          interviews, lectures, or capturing thoughts on the
                          go, our app ensures that no idea or conversation is
                          ever lost. Both apps are meticulously crafted to
                          prioritize user experience.
                      </p>
                      <Link to={"/app/speech-to-text"}>Go to App</Link>
                  </div>
              </div>

              <div className="home-join">
                  <p>
                      Join the countless individuals who have already
                      revolutionized the way they communicate. Experience the
                      future of speech and text conversion with our innovative
                      suite of apps today.
                  </p>
              </div>
          </div>
      </>
  );
}

export default Home;
