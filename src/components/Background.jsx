import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const blobVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: "easeOut" } },
  hover: { scale: 1.1 },
};

export default function Background() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        variants={blobVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        style={{ y: scrollY * 0.1 }}
      />
      <motion.div
        className="absolute top-40 left-20 w-48 h-48 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        variants={blobVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        style={{ y: scrollY * 0.05 }}
      />

      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-full blur-2xl"
        variants={blobVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        style={{ y: -scrollY * 0.08 }}
      />
      <motion.div
        className="absolute bottom-40 right-40 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full blur-2xl"
        variants={blobVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        style={{ y: -scrollY * 0.12 }}
      />

      <motion.div
        className="absolute bottom-20 left-40 w-36 h-36 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-2xl"
        variants={blobVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        style={{ y: scrollY * 0.06 }}
      />
    </div>
  );
}
