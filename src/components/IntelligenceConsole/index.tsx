import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntelligence, IntelligenceContext } from './useIntelligence';
import { ConsoleHeader } from './ConsoleHeader';
import { MessageList } from './MessageList';
import { ConsoleInput } from './ConsoleInput';
import { ToggleTrigger } from './ToggleTrigger';

export interface IntelligenceConsoleProps {
  context?: IntelligenceContext;
}

const IntelligenceConsole: React.FC<IntelligenceConsoleProps> = ({ context }) => {
  const {
    isOpen,
    setIsOpen,
    messages,
    input,
    setInput,
    isThinking,
    caps,
    isReady,
    isInitializing,
    initProgress,
    scrollRef,
    handleSend,
    initializeAI,
    injectContext,
    expertType
  } = useIntelligence(context);

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'i') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setIsOpen]);

  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 150);
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-0 right-0 z-50 p-4 md:p-8 pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="pointer-events-auto w-[calc(100vw-2rem)] md:w-[450px] h-[600px] bg-slate-900 rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col overflow-hidden mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
          >
            <ConsoleHeader 
              onClose={() => setIsOpen(false)} 
              caps={caps} 
            />

            <MessageList 
              messages={messages}
              isThinking={isThinking}
              isReady={isReady}
              isInitializing={isInitializing}
              initProgress={initProgress}
              initializeAI={initializeAI}
              scrollRef={scrollRef}
              expertType={expertType}
              setInput={setInput}
            />

            <ConsoleInput 
              inputRef={inputRef}
              input={input}
              setInput={setInput}
              handleSend={handleSend}
              injectContext={injectContext}
              context={context}
              messages={messages}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <ToggleTrigger 
        isOpen={isOpen} 
        onClick={() => setIsOpen(!isOpen)} 
      />
    </div>
  );
};

export default IntelligenceConsole;
export { IntelligenceConsole };
