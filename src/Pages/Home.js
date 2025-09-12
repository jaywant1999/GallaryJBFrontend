import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../CSS/Home.css";

import camera from "../Component/camera.png";

const Home = () => {
  const navigate = useNavigate();
  const [exitAnimation, setExitAnimation] = useState(false);

  const handleNavigate = () => {
    setExitAnimation(true);
    setTimeout(() => {
      navigate("/gallery");
    }, 1000);
  };

  return (
    <AnimatePresence>
      {!exitAnimation && (
        <motion.div
          className="home-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50, transition: { duration: 1 } }}
        >
          <motion.div
            className="camera-icon"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <img src={camera} alt="camera" id="home-image" />
          </motion.div>

          <div className="home-content">
            <h1 className="home-title">Welcome to JB's Photo Gallery</h1>
            <p className="home-description">
              A collection of memories, nature, and stories captured through my
              lens. Dive in and explore the beauty of still moments.
            </p>
            <motion.button
              className="explore-btn"
              onClick={handleNavigate}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Explore Gallery
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Home;
