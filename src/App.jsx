import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header"; // Import the Header component
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import Resume from "./pages/Resume";
import ServicePage from "./pages/ServicePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/work" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
