import { motion } from "framer-motion";
import React from "react";

function AboutMe({ data }) {
  return (
    <motion.div
      className="font scrollbar text-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {data.text}
      </motion.p>
    </motion.div>
  );
}

export default AboutMe;
