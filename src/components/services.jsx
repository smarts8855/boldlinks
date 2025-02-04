// const services = [
//   {
//     title: "SEO Services",
//     description:
//       "This is a wider card with supporting text below as a natural content.",
//     icon: "bi bi-search",
//   },
//   {
//     title: "Social Content",
//     description:
//       "This is a wider card with supporting text below as a natural content.",
//     icon: "bi bi-chat-square-dots",
//   },
//   {
//     title: "Creative ads",
//     description:
//       "This is a wider card with supporting text below as a natural content.",
//     icon: "bi bi-badge-ad",
//   },
//   {
//     title: "Brand Identity",
//     description:
//       "This is a wider card with supporting text below as a natural content.",
//     icon: "bi bi-card-checklist",
//   },
//   {
//     title: "Budget & Marketing",
//     description:
//       "This is a wider card with supporting text below as a natural content.",
//     icon: "bi bi-wallet2",
//   },
//   {
//     title: "Optimize conversions",
//     description:
//       "This is a wider card with supporting text below as a natural content.",
//     icon: "bi bi-funnel",
//   },
// ];

// const Services = () => {
//   return (
//     <section id="services" className="pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
//       <div className="container mx-auto px-4 max-w-6xl">
//         <header className="text-center mx-auto mb-12 lg:px-20">
//           <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
//             What We Do
//           </h2>
//           <svg viewBox="0 0 100 60" className="mx-auto h-9">
//             <circle
//               cx="50.1"
//               cy="30.4"
//               r="5"
//               className="stroke-primary"
//               fill="transparent"
//               strokeWidth="2"
//               strokeMiterlimit="10"
//             />
//             <line
//               x1="55.1"
//               y1="30.4"
//               x2="100"
//               y2="30.4"
//               className="stroke-primary"
//               strokeWidth="2"
//               strokeMiterlimit="10"
//             />
//             <line
//               x1="45.1"
//               y1="30.4"
//               x2="0"
//               y2="30.4"
//               className="stroke-primary"
//               strokeWidth="2"
//               strokeMiterlimit="10"
//             />
//           </svg>
//           <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
//             Save time managing advertising & Content for your business.
//           </p>
//         </header>
//         <div className="flex flex-wrap -mx-4 text-center">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6"
//             >
//               <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
//                 <div className="inline-block text-gray-900 mb-4">
//                   <i className={`${service.icon} text-3xl`}></i>
//                 </div>
//                 <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-500">{service.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

// import React from "react";

// const Service = () => {
//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
//             >
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="w-full h-40 object-cover rounded-xl mb-4"
//               />
//               <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//               <p className="text-gray-600">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Service;

import { motion } from "framer-motion";
const services = [
  {
    title: "Web Development",
    description: "We build modern and responsive web applications.",
    image:
      "https://media.istockphoto.com/id/2151904502/photo/closeup-young-man-software-developers-using-computer-to-write-code-application-program-for-ai.webp?a=1&b=1&s=612x612&w=0&k=20&c=A7XEESVl47DOthvfuYqYhUGp7iRf8FmPjR8cdh4HeIQ=",
  },
  {
    title: "DATABASE",
    description: "Creating visually appealing and user-friendly designs.",
    image:
      "https://plus.unsplash.com/premium_photo-1664297989345-f4ff2063b212?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8REFUQUJBU0V8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "WEB DESING",
    description: "Improve your website ranking on search engines.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFdFQiUyMERFU0lOR3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

const Service = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
