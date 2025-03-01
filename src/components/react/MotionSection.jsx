// src/components/MotionSection.jsx
import { motion } from "framer-motion";

const MotionSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center gap-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

export default MotionSection;
