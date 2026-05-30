import React from 'react';
import { motion } from 'framer-motion';

interface ToggleTriggerProps {
  isOpen: boolean;
  onClick: () => void;
}

export const ToggleTrigger: React.FC<ToggleTriggerProps> = ({ isOpen, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      aria-label={isOpen ? "关闭智能控制台" : "打开智能控制台"}
      className="pointer-events-auto w-16 h-16 rounded-[1.25rem] bg-slate-900 text-white shadow-2xl border border-white/10 flex items-center justify-center text-3xl group relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      {isOpen ? '🧠' : '✨'}
      {!isOpen && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-slate-900 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
      )}
    </motion.button>
  );
};
