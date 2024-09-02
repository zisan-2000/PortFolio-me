import { motion } from "framer-motion";
import React from "react";

function Education({ data }) {
  return (
    <motion.div
      className="font scrollbar grid grid-cols-1 gap-8 md:grid-cols-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {data.map((item) => (
        <motion.div
          key={item.id}
          className="card flex flex-col items-center rounded-lg p-6 shadow-lg transition-shadow hover:shadow-xl md:flex-row"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="content text-center md:text-left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="title mb-2 text-2xl font-bold">{item.degree}</h4>
            <span className="date mb-2 block text-gray-400">{item.date}</span>
            <p className="institution mb-1 text-lg font-semibold">
              {item.institution}
            </p>
            {item.grade && (
              <p className="text-xl text-teal-600 dark:text-teal-200 ">
                {item.grade}
              </p>
            )}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Education;
