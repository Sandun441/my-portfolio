import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavigationButton from './components/NavigationButton';
import profileBg from './components/profile-bg.png';
import AboutPage from './components/AboutPage';  



function App() {
  return (
    <Router>
      <div className="relative h-screen bg-black overflow-y-auto">
        <div className="relative z-10 w-full h-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <NavigationButton />
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="relative h-full w-full">
      {/* Background Image - Left side */}
      <div 
        className="absolute left-0 top-0 w-2/5 h-full bg-cover bg-no-repeat bg-left"
        style={{ backgroundImage: `url(${profileBg})` }}
      ></div>

      {/* Content - Right side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute right-0 top-0 w-3/5 h-full flex flex-col items-end justify-start pt-20 pr-20"
      >
        <motion.h1 
          className="text-5xl font-bold text-white mb-4 text-right"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          I am Sandun Liyanage
        </motion.h1>
        <motion.p 
          className="text-2xl text-gray-300 mb-8 text-right"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, type: 'spring' }}
        >
          Software Engineer | Web Developer | Mobile Developer
        </motion.p>
      </motion.div>
    </div>
  );
}

function ProjectsPage() {
  return <h2 className="text-2xl text-white">My Projects</h2>;
}

function ContactPage() {
  return <h2 className="text-2xl text-white">Contact Me</h2>;
}

export default App;