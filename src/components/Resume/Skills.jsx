import { motion } from "framer-motion";
import React from "react";

function Skills({ data }) {
  return (
    <motion.div
      className="scrollbar font grid grid-cols-1 gap-8 md:grid-cols-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {data.map((skill) => (
        <motion.div
          key={skill.id}
          className="card flex flex-col items-center rounded-lg p-6 shadow-lg transition-shadow hover:shadow-xl md:flex-row"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.img
            src={skill.image}
            alt={skill.skill}
            className="mb-4 h-32 w-32 rounded-full object-cover md:mb-0 md:mr-6 md:h-20 md:w-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          <motion.div
            className="content text-center md:text-left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="title mb-2 text-2xl font-bold">{skill.skill}</h4>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Skills;
