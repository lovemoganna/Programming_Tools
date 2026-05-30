import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { AICapabilityService, AICapabilities } from '../../utils/AICapabilityService';
import { LLMService, LLMProgress } from '../../utils/LLMService';

export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface IntelligenceContext {
  title: string;
  content: string;
  code?: string;
}

export const useIntelligence = (context?: IntelligenceContext) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [caps, setCaps] = useState<AICapabilities | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);
  const [initProgress, setInitProgress] = useState<LLMProgress | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AICapabilityService.checkCapabilities().then(setCaps);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isThinking]);

  const getExpertType = (): "wiki" | "default" | "excel" | "git" | "python" | "prompt" | "sql" => {
    const path = location.pathname;
    if (path.includes('python')) return 'python';
    if (path.includes('duckdb')) return 'sql';
    if (path.includes('ce') || path.includes('mece')) return 'prompt';
    if (path.includes('excel')) return 'excel';
    if (path.includes('git')) return 'git';
    if (path.includes('wiki')) return 'wiki';
    return 'default';
  };

  const initializeAI = async () => {
    setIsInitializing(true);
    try {
      await LLMService.initialize((p) => setInitProgress(p));
      setIsReady(true);
    } catch (e) {
      console.error("AI Init failed", e);
    } finally {
      setIsInitializing(false);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isThinking || !isReady) return;

    const userMsg: Message = { role: 'user', content: input };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsThinking(true);

    try {
      const response = await LLMService.chat(newMessages, getExpertType());
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'assistant', content: "⚠️ 推理中断：请检查 WebGPU 环境或刷新重试。" }]);
    } finally {
      setIsThinking(false);
    }
  };

  const injectContext = () => {
    if (!context) return;
    const prompt = `分析以下内容：\n标题：${context.title}\n内容：${context.content}\n${context.code ? `代码：\n${context.code}` : ''}\n\n请总结核心要点。`;
    setInput(prompt);
  };

  return {
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
    expertType: getExpertType()
  };
};
