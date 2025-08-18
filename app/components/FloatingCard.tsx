'use client'

import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const FloatingCard: React.FC<FloatingCardProps> = ({ children, className = '', delay = 0 }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return static content on server
  if (!mounted) {
    return (
      <div className={`bg-white rounded-2xl shadow-lg ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default FloatingCard;