import React from 'react';
import { IntelligenceContext, Message } from './useIntelligence';

interface ConsoleInputProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
  input: string;
  setInput: (val: string) => void;
  handleSend: () => void;
  injectContext: () => void;
  context?: IntelligenceContext;
  messages: Message[];
}

export const ConsoleInput: React.FC<ConsoleInputProps> = ({
  inputRef,
  input,
  setInput,
  handleSend,
  injectContext,
  context,
  messages
}) => {
  return (
    <div className="p-6 bg-black/20 border-t border-white/5 backdrop-blur-md">
      {context && messages.length === 0 && (
        <button 
          onClick={injectContext}
          className="mb-4 w-full py-2.5 rounded-xl border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-black uppercase tracking-widest hover:bg-blue-500/20 transition-all flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <span className="text-sm">🧪</span> 注入当前页面上下文
        </button>
      )}
      <div className="relative">
        {/* // [Issue-03] Associated label for accessibility */}
        <label htmlFor="console-query-input" className="sr-only">向 AI 助手提问</label>
        <input 
          id="console-query-input"
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="提问、代码审计或模式解析..."
          aria-label="向 AI 助手提问"
          className="w-full bg-white/5 border border-white/10 rounded-2xl pl-6 pr-12 py-4 text-sm text-white outline-none focus:border-blue-500/50 focus-visible:ring-2 focus-visible:ring-blue-500/30 transition-all placeholder:text-white/20 font-medium"
        />
        <button 
          onClick={handleSend}
          aria-label="发送消息"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
        </button>
      </div>
    </div>
  );
};
