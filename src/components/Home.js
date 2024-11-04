import React from 'react';
import { motion } from 'framer-motion';
import FloatingWords from './FloatingWords';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900">
      <FloatingWords />
      
      {/* Main Content with Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="text-blue-600">Your Name</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8">
            Frontend Developer & UI Designer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            I create beautiful and functional web experiences 
            with modern technologies and best practices
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center">
            <motion.button
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
            <motion.button
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-white rounded-full hover:bg-blue-600 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['React', 'JavaScript', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Next.js', 'Git', 'REST APIs'].map((skill) => (
              <motion.div
                key={skill}
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-gray-900 dark:text-white">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="mt-24 flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {[
            { icon: 'github', url: 'https://github.com/yourusername' },
            { icon: 'linkedin', url: 'https://linkedin.com/in/yourusername' },
            { icon: 'twitter', url: 'https://twitter.com/yourusername' }
          ].map((social) => (
            <motion.a
              key={social.icon}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
              whileHover={{ scale: 1.2 }}
            >
              <i className={`fab fa-${social.icon} text-2xl`}></i>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;