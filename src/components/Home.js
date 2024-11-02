import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      className="p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      ref={ref}
    >
      <motion.h1 
        className="text-6xl font-bold text-blue-600 mb-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.p 
        className="text-xl text-gray-600 mb-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        I'm a passionate developer creating amazing web experiences.
      </motion.p>
      <motion.button
        className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore My Work
      </motion.button>
    </motion.div>
  );
};

export default Home;