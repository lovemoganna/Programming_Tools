import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";
import React from "react";

// Mock the heavy IntelligenceConsole component to avoid background async WebGPU/LLM updates in tests
vi.mock("../components/IntelligenceConsole", () => ({
  default: () => null,
  IntelligenceConsole: () => null
}));

// Mock framer-motion to avoid animation lockups and invalid prop warnings in tests
vi.mock("framer-motion", async (importOriginal) => {
  const actual = await importOriginal<typeof import("framer-motion")>();
  const createMotionComponent = (tagName: string) => {
    return React.forwardRef(({ children, transition, variants, initial, animate, exit, whileHover, whileTap, layout, ...props }: any, ref: any) => {
      return React.createElement(tagName, { ...props, ref }, children);
    });
  };
  const motionProxy = new Proxy({}, {
    get: (target, propName: string) => {
      return createMotionComponent(propName);
    }
  });
  return {
    ...actual,
    AnimatePresence: ({ children }: any) => React.createElement(React.Fragment, null, children),
    motion: motionProxy
  };
});

// Mock IntersectionObserver for Framer Motion / jsdom
window.IntersectionObserver = class IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = "";
  readonly thresholds: ReadonlyArray<number> = [];
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() { return []; }
} as any;

// Mock HTMLElement.prototype.scrollTo for jsdom
window.HTMLElement.prototype.scrollTo = vi.fn();
if (window.Element && window.Element.prototype) {
  window.Element.prototype.scrollTo = vi.fn();
}
if (typeof global !== "undefined") {
  if ((global as any).HTMLElement && (global as any).HTMLElement.prototype) {
    (global as any).HTMLElement.prototype.scrollTo = vi.fn();
  }
}

// Mock browser APIs for DuckDB Worker/Blob setup in tests
window.URL.createObjectURL = vi.fn(() => "blob:dummy");
window.URL.revokeObjectURL = vi.fn();
(window as any).Worker = class Worker {
  postMessage = vi.fn();
  terminate = vi.fn();
  addEventListener = vi.fn();
  removeEventListener = vi.fn();
};

// Mock DuckDB WASM module
vi.mock("@duckdb/duckdb-wasm", () => {
  return {
    getJsDelivrBundles: vi.fn(() => ({})),
    selectBundle: vi.fn(() => Promise.resolve({ mainWorker: "dummy", mainModule: "dummy", pthreadWorker: "dummy" })),
    ConsoleLogger: class ConsoleLogger {},
    AsyncDuckDB: class AsyncDuckDB {
      instantiate = vi.fn(() => Promise.resolve());
      terminate = vi.fn();
      connect = vi.fn(() => Promise.resolve({
        query: vi.fn(() => Promise.resolve({
          numRows: 0,
          getChild: () => ({ get: () => "" })
        })),
        close: vi.fn()
      }));
    }
  };
});

// Automatically cleanup DOM elements after each test
afterEach(() => {
  cleanup();
});
