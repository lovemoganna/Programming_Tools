import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import React from 'react';
import { Tag, Callout, StepCard } from "./index";

describe("Tag Component", () => {
  it("renders children text", () => {
    render(<Tag>FLOW</Tag>);
    expect(screen.getByText("FLOW")).toBeInTheDocument();
  });

  it("applies default variant (primary) and size (sm) classes", () => {
    const { container } = render(<Tag>PRIMARY</Tag>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain("bg-[var(--color-primary-100)]");
    expect(element.className).toContain("text-xs");
  });

  it("applies custom variant and size classes", () => {
    const { container } = render(<Tag variant="danger" size="md">DANGER</Tag>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain("bg-[var(--color-danger-100)]");
    expect(element.className).toContain("text-xs");
  });
});

describe("Callout Component", () => {
  it("renders children and optional title", () => {
    render(<Callout title="WARNING" type="warn">Warning content</Callout>);
    expect(screen.getByText("WARNING")).toBeInTheDocument();
    expect(screen.getByText("Warning content")).toBeInTheDocument();
  });

  it("applies correct border and background classes depending on type", () => {
    const { container } = render(<Callout type="danger">Danger details</Callout>);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain("bg-[var(--color-danger-50)]");
    expect(element.className).toContain("border-[var(--color-danger-500)]");
  });
});

describe("StepCard Component", () => {
  it("renders the step number, title, and description", () => {
    render(
      <StepCard 
        step={1} 
        title="初始化本地仓库" 
        description="执行 git init 创建本地仓库。" 
      />
    );
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("初始化本地仓库")).toBeInTheDocument();
    expect(screen.getByText("执行 git init 创建本地仓库。")).toBeInTheDocument();
  });
});
