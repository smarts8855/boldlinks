import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1449171785/photo/young-it-specialist-working-at-pc-at-home-debugging-java-script-cyber-space-error.webp?a=1&b=1&s=612x612&w=0&k=20&c=9eOjWCKysIIgpCnR71DtbZV8p5DuObpeyw4de49-OMc=')",
      }}
    >
      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-50 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center z-50">
        <h1 className="text-2xl font-bold">BOLDLINKS</h1>
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
        <ul className={`md:flex space-x-6 hidden`}>
          <li>
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-black bg-opacity-80 md:hidden"
          >
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center h-full text-white text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold"
        >
          Welcome to Boldlink Technology
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg mt-4"
        >
          Embark on an exciting journey of learning and innovation with our
          top-notch programming courses
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700"
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
}
