import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactForm from "./components/SignupLogin.jsx";
import SpeechToText from "./components/SpeechToText.jsx";
import TextToSpeech from "./components/TextToSpeech.jsx";
import Home from "./routes/Home.jsx";
import ContactUs from "./routes/ContactUs.jsx";
import AboutUs from "./routes/AboutUs.jsx";
import GoToApps from "./routes/GoToApps.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import MainLayout from "./layout/MainLayout.jsx";

function App() {
  return (
    <>
      <MainLayout>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup-login" element={<ContactForm />} />
             <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/go-to-app" element={<GoToApps/>} />
            <Route path="/app/text-to-speech" element={<TextToSpeech />} />
            <Route path="/app/speech-to-text" element={<SpeechToText />} />
          </Routes>
        </main>
        <Footer />
      </MainLayout>
    </>
  );
}

export default App;
