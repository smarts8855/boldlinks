import { motion } from "framer-motion";
const teamMembers = [
  {
    name: "Chigozie Joshua",
    role: "Software Developer at Bluecode",
    image:
      "https://media.licdn.com/dms/image/v2/C5603AQGmXYCLqF2yKg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1615546451997?e=1744243200&v=beta&t=Lm7XbSAvs-g5MlNF531SLvjMVydDE2lxPoqHtBe2XgQ",
    description:
      "It was a tremendous experience as i got to learn the numerous of both Back-end and Front-end development.It wasn't just about the languages and tools covered, it was also about the architecture behind writing code and imbibing the mentality of a software engineer.",
  },
  {
    name: "Ibrahim Olayioye",
    role: "UI/UX Designer",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQHxKAHVupO8uA/profile-displayphoto-shrink_800_800/B4DZOdvn1xHMAc-/0/1733518328237?e=1744243200&v=beta&t=UEAo61_nnCbm8uFEaofIzyYVfn-WBc2ORfsRUN21Br4",
    description:
      "At Boldlinks, we weren't just taught programming syntax but we learnt to build. We were instilled with the discipline and the mental fortitude of software engineer,it was an awesome experience. In less than a year of training, I got my first job at Boldlinks as a tutor from where I left to work as a developer in an e-commerce firm.",
  },
  {
    name: "Aderemi Suliamon",
    role: "Project Manager",
    image:
      "https://media.licdn.com/dms/image/v2/C5603AQHcMbaFQHfijQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1639482328704?e=1744243200&v=beta&t=VXXbQElnWST1ThXFJZXp0_ufsZ-yzNY2-JuVlWsnyiQ",
    description:
      "I owe Boldlinks Technology so much because it gave me more than the penny I paid. Today I work as a developer with MYSOL Nigeria Limited where I work with other developers to improve the HRMS application built on LARAVEL FRAMEWORK. ",
  },
];

const Testimonies = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">TESTIMONIES</h2>
        <div className="grid md:grid-cols-3 gap-8 px-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full border-4 border-gray-300 mb-4"
                whileHover={{ scale: 1.1 }}
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
              <p className="text-gray-700 mt-2">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
