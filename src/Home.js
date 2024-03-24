import React from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="home-container">
      <motion.div
        className="content-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Welcome to My Portfolio</h1>
        <p>Check out my projects and skills!</p>
      </motion.div>
    </div>
  );
};

export default HomePage;
