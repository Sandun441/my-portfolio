import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavigationButton from './components/NavigationButton';
import backgroundImage from './images/profile-bg.png'; // Import the image

function App() {
  return (
    <Router>
      <div className="relative flex flex-col md:flex-row h-screen bg-black overflow-hidden">
        {/* Background Image Area */}
        <div 
          className="w-full md:w-1/3 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* You can add content over the background image here if needed */}
        </div>

        {/* Main Content Area */}
        <div className="w-full md:w-2/3 bg-black p-4 relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>

        {/* Navigation Button */}
        <NavigationButton />
      </div>
    </Router>
  );
}

// Placeholder components for each route
function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center mt-20"
    >
      <h1 className="text-4xl font-bold text-white">Welcome to My Portfolio</h1>
      <p className="text-xl text-gray-300 mt-4">Frontend Developer & Designer</p>
    </motion.div>
  );
}

function AboutPage() {
  return <h2 className="text-2xl text-white">About Me</h2>;
}

function ProjectsPage() {
  return <h2 className="text-2xl text-white">My Projects</h2>;
}

function ContactPage() {
  return <h2 className="text-2xl text-white">Contact Me</h2>;
}

export default App;