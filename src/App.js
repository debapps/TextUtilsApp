import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import AboutPage from './components/AboutPage';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import ErrorPage from './components/ErrorPage';

function App() {

  // Alert hooks.
   const [alertObj, setAlertObj] = useState(null);

  // This function set type and message of the alert.
  // available types:
  // primary, secondary, success, danger, warning, info, light, dark.
  function showAlert (type, message) {
    // Set the alert.
    setAlertObj({
      type: type,
      msg: message
    });

    // Fade the alert after 1.5s.
    setTimeout(() => {
      setAlertObj(null)
    }, 1500);
  }
  
  // Dark mode hooks.
  const [mode, setMode] = useState("light");

  // This function set theme (red/green/blue/light) of the site,
  const setTheme = (event) => {
    let newMode = event.target.value;
    setMode(newMode);

    switch(newMode) {
      case "light": 
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        showAlert("success", "Light Mode Enabled!");
        break;
      case "red":
        document.body.style.backgroundColor = "#4C0027";
        document.body.style.color = "#FAF3F3";
        showAlert("success", "Red Mode Enabled!");
        break;
      case "green":
        document.body.style.backgroundColor = "#1E5128";
        document.body.style.color = "#E4EFE7";
        showAlert("success", "Green Mode Enabled!");
        break;
      case "blue":
          document.body.style.backgroundColor = "#1A1A40";
          document.body.style.color = "#CAF0F8";
          showAlert("success", "Blue Mode Enabled!");
          break;
      default:
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        showAlert("warning", "Default Mode");
    }
  }

  
  return (
   <>
    <Navbar mode={mode} 
            setTheme={setTheme}
            navBrand="Text Utils" 
            aboutText="About Us" 
            contact="Contact Us"/>

    <Alert alert={alertObj} />
    

    <Routes>
        <Route path="/" element={<TextForm mode={mode}
              showAlert={showAlert} 
              textHeading = "Try Text Utility - Word | Character | Sentence | Paragraph Counter | Remove Extra Space | Uppercase - Lowercase | Markup - HTML" />} />
        <Route path="/about" element={<AboutPage mode={mode}/>} />
        <Route path="/contact" element={<ContactPage mode={mode}/>} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>

    <Footer footNote = "Made with &#128151; by Debaditya Bhar" />
   </>
  );
}

export default App;
