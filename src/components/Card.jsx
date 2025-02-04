import { motion } from "framer-motion";

const Card = ({ image, title }) => {
  return (
    <motion.div
      className="bg-white p-4 rounded-lg shadow-md"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {/* <p className="text-sm text-gray-600">{description}</p> */}
      </div>
    </motion.div>
  );
};

export default Card;
