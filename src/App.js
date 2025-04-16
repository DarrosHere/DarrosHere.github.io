import './App.css';
import ParallaxText from './ParallaxText';
import photo from './img/avatar.png';
import Tabs from './components/Tabs';
import Content from './components/Content';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="App min-h-screen flex flex-col items-center text-white">
      <div className="overflow-hidden w-full">
        <ParallaxText baseVelocity={-2}>looking for a job</ParallaxText>
        <ParallaxText baseVelocity={2}>open for new opportunities</ParallaxText>
      </div>

      <div className="flex flex-wrap justify-center items-center p-4 gap-4 flex-1">
        <div>
          <img className="rounded-lg" src={photo} alt="me" />
        </div>
        <div>
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <Content activeTab={activeTab} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <footer className="footer w-full p-4 mt-auto text-center text-white">
        © 2025 Andrew. All rights reserved.
      </footer>
    </div>
  );
}


export default App;