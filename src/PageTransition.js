import { motion } from "framer-motion";

const variants = {
    initial: {
      opacity: 0,
      scale: 1.2,
      x: 300,
      rotateY: 15,
      filter: 'blur(8px)',
    },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      rotateY: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: [0.42, 0, 0.58, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      x: -300,
      rotateY: -10,
      filter: 'blur(8px)',
      transition: {
        duration: 1.2,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

export default function PageTransition({ children, keyName }) {
  return (
    <motion.div
      key={keyName}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="absolute w-full h-full top-0 left-0 flex items-center justify-center"
      style={{ perspective: 1000 }}
    >
      <div className="w-full h-full">{children}</div>
    </motion.div>
  );
}
