import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header Section with Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-4">About Me</h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="w-full h-[750px] relative">
            <motion.a
              href="https://drive.google.com/file/d/1DsUkFU_8zacu9eF7-1-HmSvJNaRCIoLI/view" // Replace with your actual link
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }} // Scale up on hover
              whileTap={{ scale: 0.95 }} // Scale down on tap
              className="relative block" // Make the anchor block-level for positioning
            >
              <motion.img
                src="/cv.png" // Add your image path here
                alt="Profile"
                className="w-full h-full object-cover cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }} // Fade in animation
              />
              
              {/* Tooltip Overlay */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white text-lg font-bold opacity-0 hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 1 }} // Show on hover
              >
                Click to View CV
              </motion.div>
            </motion.a>
          </div>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Start slightly below
          animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-blue-500">Software Engineer & Web Developer</h2>
          <p className="text-lg text-gray-300">
            Hi, I'm Sandun Liyanage. I specialize in building exceptional digital experiences
            that combine innovative technology with intuitive design.
          </p>
          
          {/* Skills Section */}
                   
                    {/* Skills Section */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.6 }} // Fade in for the entire section
  className="space-y-4"
>
  <h3 className="text-2xl font-semibold">Technical Skills</h3>
  <div className="grid grid-cols-2 gap-4">
    {[
      "React", "Node.js", "JavaScript", "TypeScript",
      "Python", "AWS", "Docker", "MongoDB"
    ].map((skill, index) => (
      <motion.div
        key={skill}
        initial={{ opacity: 0, y: 20 }} // Start slightly below
        animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
        transition={{ 
          delay: 0.8 + index * 0.1, // Staggered delay for each skill
          type: "spring", // Use spring animation for a bouncy effect
          stiffness: 100 // Control the stiffness of the spring
        }}
        whileHover={{ 
          scale: 1.05, // Scale up slightly
          backgroundColor: "#3b82f6", // Change background color to blue
          boxShadow: "0px 4px 20px rgba(59, 130, 246, 0.5)", // Add shadow effect
          transition: { duration: 0.3 } // Smooth transition for hover effects
        }} 
        className="bg-gray-800 p-3 rounded-lg text-center transition-colors cursor-pointer"
      >
        {skill}
      </motion.div>
    ))}
  </div>
</motion.div>
        </motion.div>
      </div>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity:  1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-bold text-blue-500">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {[
            {
              title: "Senior Software Engineer",
              company: "Tech Company",
              period: "2020 - Present",
              description: "Led development of multiple full-stack applications..."
            },
            {
              title: "Web Developer",
              company: "Digital Agency",
              period: "2018 - 2020",
              description: "Developed responsive web applications..."
            }
          ].map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }} // Start from the left
              animate={{ opacity: 1, x: 0 }} // Slide in to the center
              transition={{ delay: 1.2 + index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-xl font-bold text-blue-500">{exp.title}</h3>
              <p className="text-gray-400">{exp.company} | {exp.period}</p>
              <p className="mt-2 text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact CTA Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }} // Start small and invisible
        animate={{ opacity: 1, scale: 1 }} // Scale up to normal size
        transition={{ duration: 0.6, delay: 1.6 }} // Smooth transition
        className="text-center mt-20"
      >
        <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
        >
          Contact Me
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AboutPage;