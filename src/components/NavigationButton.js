import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaCode, FaEnvelope } from 'react-icons/fa';

function NavigationButton() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: '/', label: 'Home', icon: <FaHome size={24} />, position: { left: '-165px', bottom: '0px' } },
    { path: '/about', label: 'About', icon: <FaUser size={24} />, position: { left: '-70px', bottom: '160px' } },
    { path: '/projects', label: 'Projects', icon: <FaCode size={24} />, position: { left: '100px', bottom: '160px' } },
    { path: '/contact', label: 'Contact', icon: <FaEnvelope size={24} />, position: { left: '200px', bottom: '0px' } },
  ];

  return (
    <div className="fixed bottom-8 right-1/3 transform -translate-x-1/2 z-50">
      {/* Navigation Menu */}
      {isOpen && (
        <motion.div 
          className="absolute bottom-0 left-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                style={{
                  position: 'absolute',
                  ...item.position
                }}
              >
                <Link
                  to={item.path}
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-black hover:bg-gray-200 transition-all duration-300 shadow-lg group"
                  title={item.label}
                >
                  <div className="text-gray-800 group-hover:text-gray-600 transition-colors">
                    {item.icon}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Hand Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="focus:outline-none relative z-10 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
      >
        <motion.img 
          src="/hand.png" 
          alt="Menu" 
          className="w-24 h-24 cursor-pointer"
          animate={{ 
            rotate: isOpen ? 0 : 180,
            opacity: isOpen ? 0.8 : 1
          }}
          transition={{ duration: 0.3 }}
          style={{
            filter: 'drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.5))',
          }}
        />
      </button>
    </div>
  );
}

export default NavigationButton;