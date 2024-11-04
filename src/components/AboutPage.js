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
          <div className="w-full h-[400px] bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg overflow-hidden">
            <img
              src="/your-profile-image.jpg" // Add your image path here
              alt="Profile"
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </div>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-blue-500">Software Engineer & Web Developer</h2>
          <p className="text-lg text-gray-300">
            Hi, I'm Sandun Liyanage. I specialize in building exceptional digital experiences
            that combine innovative technology with intuitive design.
          </p>
          
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-gray-800 p-3 rounded-lg text-center hover:bg-blue-500 transition-colors"
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
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-20 max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="space-y-8">
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
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
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

      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
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