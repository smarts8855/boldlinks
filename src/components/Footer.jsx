// const Footer = () => {
//   return (
//     <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
//       <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
//         <div className="sm:flex sm:items-center sm:justify-between">
//           <a
//             href="https://flowbite.com/"
//             className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
//           >
//             <img
//               src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
//               className="h-8"
//               alt="Flowbite Logo"
//             />
//             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//               Boldlinks
//             </span>
//           </a>
//           <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
//             <li>
//               <a href="#" className="hover:underline me-4 md:me-6">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:underline me-4 md:me-6">
//                 Privacy Policy
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:underline me-4 md:me-6">
//                 Licensing
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:underline">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//         <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
//         <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
//           © 2023{" "}
//           <a href="https://flowbite.com/" className="hover:underline">
//             Flowbite™
//           </a>
//           . All Rights Reserved.
//         </span>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold">Boldlinks Technology</h2>
            <p className="mt-3 text-gray-400">
              Empowering developers with modern coding skills to build the
              future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="mt-3 text-gray-400">
              472, Lagos Abeokuta Expressway, Beside Northwest Filling Station,
              General B/stop, Ijaiye Ojokoro, Lagos
            </p>
            <p className="text-gray-400">Email: info@boldlinks.com.ng</p>
            <p className="text-gray-400">Phone: 08162754001</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Boldlinks Technology Solution. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
