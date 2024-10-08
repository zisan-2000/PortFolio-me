import { motion } from "framer-motion";
import React from "react";

function Experience({ data }) {
  return (
    <motion.div
      className="scrollbar font grid grid-cols-1 gap-8 md:grid-cols-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {data.map((item) => (
        <motion.div
          key={item.id}
          className="card flex flex-col items-center rounded-lg p-6 shadow-lg transition-shadow hover:shadow-xl md:flex-row"
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            src={item.image}
            alt={item.name}
            className="mb-4 h-32 w-32 rounded-full object-cover md:mb-0 md:mr-6 md:h-20 md:w-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          <motion.div
            className="content"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="title mb-2 text-2xl font-bold">{item.title}</h4>
            <span className="date mb-2 block text-gray-500">{item.date}</span>
            <p className="company mb-1 text-lg font-semibold">{item.name}</p>
            <p className="description text-gray-700">{item.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Experience;
