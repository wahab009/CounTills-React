import './App.css';
// import About from './components/About';
// import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';
import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    const originalTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "ComeBack!";
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // const [alert, setalert] = useState(null);

  // const showAlert = (msg, type) => {
  //   setalert(null); // pehle alert ko hata do
  //   setTimeout(() => {
  //     setalert({
  //       msg: msg,
  //       type: type
  //     });
  //   }, 100);
  // };

  return (
    // <Router>
      <div>
        <Navbar title="CounTills"/>
        {/* <Alerts alert={alert} /> Moved outside Routes */}
        <Textforms  heading="Text Counter"/>
        {/* <Routes> */}
          {/* <Route path="/About" element={<About />} /> Correct v6 syntax */}
          {/* <Route path="/" element={<Textforms heading="Text Counter" showAlert={showAlert} />} /> */}
        {/* </Routes> */}
      </div>
    // </Router>
  );
}

export default App;