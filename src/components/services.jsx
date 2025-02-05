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

    description:
      "A database is an organized collection of data that is stored, managed, and accessed electronically.",
    image:
      "https://plus.unsplash.com/premium_photo-1664297989345-f4ff2063b212?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8REFUQUJBU0V8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "WEB DESING",
    description: "Creating visually appealing and user-friendly designs.",
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
