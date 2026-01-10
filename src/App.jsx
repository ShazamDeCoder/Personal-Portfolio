import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Preloader from "./Components/Preloader";
import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Preloader />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          key="content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Navigation />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </motion.div>
      )}
    </>
  );
}

export default App;
