import React from 'react';
import { motion } from 'framer-motion';

const Blocks = ({ blocks }) => {
  const blockVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const handleClick = (e, link) => {
    e.preventDefault();  
    if (link && link !== '#') {
      window.open(link, '_blank');  
    }
  };

  return (
    <motion.div
      className="grid grid-cols-3 gap-4 mt-8"
      initial="hidden"
      animate="visible"
      variants={blockVariants}
      transition={{ staggerChildren: 0.2 }}
    >
      {blocks.map((block) => (
        <motion.button
          key={block.id}
          onClick={(e) => handleClick(e, block.link)} 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 rounded-lg shadow-lg flex items-center justify-center relative"
          style={{
            backgroundImage: `url(${block.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          variants={blockVariants}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <span className="text-white font-bold text-sm">{block.title}</span>
          </div>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default Blocks;
