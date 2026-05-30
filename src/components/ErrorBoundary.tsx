import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  private handleReset = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/";
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-white font-sans">
          <div className="w-full max-w-xl bg-slate-900 border border-white/10 rounded-[2.5rem] p-10 md:p-12 shadow-2xl flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="w-16 h-16 rounded-[1.25rem] bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-3xl mb-8">
              🚨
            </div>
            
            <h1 className="text-3xl font-black tracking-tight mb-4 text-rose-400">系统遇到异常崩溃</h1>
            <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8 max-w-sm">
              检测到未捕获的渲染级错误。为了防止持续损坏，您可以清除缓存重置应用。
            </p>
            
            <div className="w-full bg-slate-950 border border-white/5 rounded-2xl p-5 mb-8 text-left font-mono text-xs text-rose-300 max-h-[150px] overflow-y-auto select-text scrollbar-hide">
              <strong>Error:</strong> {this.state.error?.message || "Unknown rendering exception"}
            </div>
            
            <button
              onClick={this.handleReset}
              className="w-full bg-rose-600 hover:bg-rose-500 text-white text-xs font-black uppercase tracking-widest py-4 rounded-xl transition-all shadow-lg shadow-rose-950/20 active:scale-95"
            >
              清除所有缓存并强制重置 Clear & Reset
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
