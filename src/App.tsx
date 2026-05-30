import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar";
import PageTransition from "./components/PageTransition";

// 懒加载页面组件
const HomePage = lazy(() => import("./pages/HomePage"));
const ExcelPromptsPage = lazy(() => import("./apps/excel-prompts/ExcelPromptsPage"));
const GitWorkflowPage = lazy(() => import("./apps/git-workflow/GitWorkflowPage"));
const MeceFrameworkPage = lazy(() => import("./apps/mece-framework/MeceFrameworkPage"));
const ProgrammingMindsetPage = lazy(() => import("./apps/programming-mindset/ProgrammingMindsetPage"));
const PythonMecePage = lazy(() => import("./apps/python-mece/PythonMecePage"));
const DuckdbTutorialPage = lazy(() => import("./apps/duckdb-tutorial/DuckdbTutorialPage"));
const ContextEngineeringPage = lazy(() => import("./apps/context-engineering/ContextEngineeringPage"));
const FlowWikiPage = lazy(() => import("./apps/flow-wiki/FlowWikiPage"));

// 页面加载状态
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin" />
  </div>
);

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/excel" element={<PageTransition><ExcelPromptsPage /></PageTransition>} />
        <Route path="/git" element={<PageTransition><GitWorkflowPage /></PageTransition>} />
        <Route path="/mece" element={<PageTransition><MeceFrameworkPage /></PageTransition>} />
        <Route path="/mindset" element={<PageTransition><ProgrammingMindsetPage /></PageTransition>} />
        <Route path="/python" element={<PageTransition><PythonMecePage /></PageTransition>} />
        <Route path="/duckdb" element={<PageTransition><DuckdbTutorialPage /></PageTransition>} />
        <Route path="/ce" element={<PageTransition><ContextEngineeringPage /></PageTransition>} />
        <Route path="/wiki" element={<PageTransition><FlowWikiPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <AnimatedRoutes />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
