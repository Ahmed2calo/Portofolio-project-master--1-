import React from "react";
import Layout from "./components/Layout";  // Import the Layout component
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";  // Import the Contact component
import Navbar from "./components/Navbar";  // Import the Navbar component

const App: React.FC = () => {
  return (
    <div>
      <Navbar /> {/* Add Navbar at the top */}
      <Layout>
        <Home />
        <Skills />
        <Projects />
        <Contact /> {/* Add Contact section */}
      </Layout>
    </div>
  );
};

export default App;
