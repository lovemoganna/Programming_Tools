import { describe, it, expect } from "vitest";
import { getPerformanceMetrics } from "./performanceMonitor";

describe("performanceMonitor utility", () => {
  it("should return valid performance report properties", async () => {
    const report = await getPerformanceMetrics();
    
    expect(report).toHaveProperty("fcp");
    expect(report).toHaveProperty("tti");
    expect(report).toHaveProperty("isWhiteScreenCrashed");
    expect(report).toHaveProperty("status");

    expect(typeof report.fcp).toBe("number");
    expect(typeof report.tti).toBe("number");
    expect(typeof report.isWhiteScreenCrashed).toBe("boolean");
    expect(["Excellent", "Good", "Slow"]).toContain(report.status);
  });
});
