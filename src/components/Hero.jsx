// import { useState } from "react";

// const Hero = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="fixed inset-x-0 top-0 flex justify-between items-center z-10 text-white bg-transparent p-4">
//         <div className="font-extrabold tracking-widest text-xl">
//           <a href="#" className="transition duration-500 hover:text-indigo-500">
//             BOLDLINKS
//           </a>
//         </div>
//         {/* Desktop Nav */}
//         <div className="hidden md:flex space-x-8 font-bold">
//           <a
//             href="#about"
//             className="text-lg border-b-2 border-transparent hover:border-indigo-300 transition duration-500"
//           >
//             About
//           </a>
//           <a
//             href="#whyus"
//             className="text-lg border-b-2 border-transparent hover:border-indigo-300 transition duration-500"
//           >
//             Why Us?
//           </a>
//           <a
//             href="#showcase"
//             className="text-lg border-b-2 border-transparent hover:border-indigo-300 transition duration-500"
//           >
//             Our Products
//           </a>
//         </div>
//         {/* Mobile Nav Button */}
//         <div className="md:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
//           <svg
//             width="24"
//             height="24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="feather feather-menu"
//           >
//             <line x1="3" y1="12" x2="21" y2="12"></line>
//             <line x1="3" y1="6" x2="21" y2="6"></line>
//             <line x1="3" y1="18" x2="21" y2="18"></line>
//           </svg>
//         </div>
//       </nav>
//       {/* Mobile Nav */}
//       {isNavOpen && (
//         <div className="fixed left-0 right-0 bg-white mx-2 mt-16 rounded-br rounded-bl shadow z-10 p-2 divide-y divide-gray-600 flex flex-col">
//           <a href="#about" className="p-2 font-semibold hover:text-indigo-700">
//             About
//           </a>
//           <a href="#whyus" className="p-2 font-semibold hover:text-indigo-700">
//             Why Us?
//           </a>
//           <a
//             href="#showcase"
//             className="p-2 font-semibold hover:text-indigo-700"
//           >
//             Our Products
//           </a>
//         </div>
//       )}
//       {/* Hero Section */}
//       <header
//         className="h-screen bg-cover bg-center relative"
//         style={{
//           backgroundImage:
//             "url('https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
//         }}
//       >
//         <div className="h-full py-4 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="text-center text-white px-4 ">
//             <h1 className="font-bold text-3xl md:text-5xl">
//               <span className="text-white">Right</span> Place To
//             </h1>
//             <h2 className="font-bold text-2xl md:text-5xl leading-tight">
//               Become <span className="text-white">a </span>
//               <span className="text-white">Professionals</span> Softwear
//               Engineer
//             </h2>
//             <div className="inline-flex mt-5">
//               <button className="px-6 py-2 mx-2 bg-indigo-700 hover:bg-indigo-800 font-bold text-white rounded border-2 border-transparent hover:border-indigo-800 shadow-md transition duration-500 md:text-xl">
//                 Hire Us!
//               </button>
//               <a href="#about">
//                 <button className="px-6 py-2 mx-2 bg-indigo-200 bg-opacity-75 hover:bg-opacity-100 border-2 border-indigo-700 rounded hover:border-indigo-800 font-bold text-indigo-800 shadow-md transition duration-500 md:text-lg">
//                   Learn More
//                 </button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Hero;

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
          "url('https://media.istockphoto.com/id/2166408604/photo/group-adult-asia-male-female-freelance-typing-write-prompt-ai-bot-it-app-smart-program-nomad.webp?a=1&b=1&s=612x612&w=0&k=20&c=MVxFXRqN3d3UMU11rRitHUU6-KQ6lmIRf0GJAnVn-2k=')",
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
