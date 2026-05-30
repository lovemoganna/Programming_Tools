import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import React from 'react';
import { CodeBlock } from "./index";

describe("CodeBlock Component", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders code block with text and label", () => {
    render(<CodeBlock label="TEST-LABEL">const a = 1;</CodeBlock>);
    expect(screen.getByText("TEST-LABEL")).toBeInTheDocument();
    expect(screen.getByText("const a = 1;")).toBeInTheDocument();
  });

  it("applies default fontSize (sm) and fontFamily (mono) classes", () => {
    const { container } = render(<CodeBlock>const a = 1;</CodeBlock>);
    const wrapper = container.querySelector("div.overflow-x-auto");
    expect(wrapper).toBeInTheDocument();
    expect(wrapper?.className).toContain("text-sm");
    expect(wrapper?.className).toContain("font-mono");
  });

  it("applies custom fontSize and fontFamily classes", () => {
    const { container } = render(
      <CodeBlock fontSize="xs" fontFamily="serif">
        const a = 1;
      </CodeBlock>
    );
    const wrapper = container.querySelector("div.overflow-x-auto");
    expect(wrapper).toBeInTheDocument();
    expect(wrapper?.className).toContain("text-xs");
    expect(wrapper?.className).toContain("font-serif");
  });

  it("copies content to clipboard when copy button is clicked", async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: writeTextMock,
      },
      writable: true,
      configurable: true
    });

    render(<CodeBlock>hello world</CodeBlock>);
    const copyBtn = screen.getByRole("button", { name: "复制代码" });
    fireEvent.click(copyBtn);

    expect(writeTextMock).toHaveBeenCalledWith("hello world");
    await waitFor(() => {
      expect(screen.getByRole("button", { name: "已复制" })).toBeInTheDocument();
    });
  });
});
