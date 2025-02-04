// const people = [
//   {
//     name: "Leslie Alexander",
//     role: "Co-Founder / CEO",
//     imageUrl:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//   },
//   {
//     name: "Leslie Alexander",
//     role: "Co-Founder / CEO",
//     imageUrl:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//   },
//   // More people...
// ];
// export default function HourTeam() {
//   return (
//     <div className="bg-white py-24 sm:py-32">
//       <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
//         <div className="max-w-xl">
//           <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
//             Meet our leadership
//           </h2>
//           <p className="mt-6 text-lg/8 text-gray-600">
//             We’re a dynamic group of individuals who are passionate about what
//             we do and dedicated to delivering the best results for our clients.
//           </p>
//         </div>
//         <ul
//           role="list"
//           className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
//         >
//           {people.map((person) => (
//             <li key={person.name}>
//               <div className="flex items-center gap-x-6">
//                 <img
//                   alt=""
//                   src={person.imageUrl}
//                   className="size-16 rounded-full"
//                 />
//                 <div>
//                   <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
//                     {person.name}
//                   </h3>
//                   <p className="text-sm/6 font-semibold text-indigo-600">
//                     {person.role}
//                   </p>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// import { motion } from "framer-motion";

// const MembershipCard = ({ name, image }) => {
//   return (
//     <motion.div
//       className="bg-white shadow-lg rounded-2xl p-4 flex items-center space-x-4 w-80"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <motion.img
//         src={image}
//         alt={name}
//         className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
//         whileHover={{ scale: 1.1 }}
//       />
//       <motion.div
//         className="flex-1"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3 }}
//       >
//         <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default MembershipCard;

import React from "react";

const teamMembers = [
  {
    name: "Chigozie Joshua",
    role: "Lead Developer",
    image:
      "data:image/jpeg;base64,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",
    description:
      "Expert in frontend and backend development with 10 years of experience.",
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQHxKAHVupO8uA/profile-displayphoto-shrink_800_800/B4DZOdvn1xHMAc-/0/1733518328237?e=1744243200&v=beta&t=UEAo61_nnCbm8uFEaofIzyYVfn-WBc2ORfsRUN21Br4",
    description:
      "Passionate about creating user-friendly and visually appealing designs.",
  },
  {
    name: "Mike Johnson",
    role: "Project Manager",
    image:
      "https://media.licdn.com/dms/image/v2/C5603AQHcMbaFQHfijQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1639482328704?e=1744243200&v=beta&t=VXXbQElnWST1ThXFJZXp0_ufsZ-yzNY2-JuVlWsnyiQ",
    description: "Ensuring smooth project execution and timely deliveries.",
  },
];

const HourTeam = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8 px-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full border-4 border-gray-300 mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
              <p className="text-gray-700 mt-2">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HourTeam;
