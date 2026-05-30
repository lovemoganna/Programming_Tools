import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FormulaSandbox } from "./FormulaSandbox";

describe("FormulaSandbox Component", () => {
  it("renders correctly with heading and preset formulas", () => {
    render(<FormulaSandbox />);
    
    // Check heading
    expect(screen.getByText("Excel 高阶公式本地运行沙盒")).toBeInTheDocument();
    
    // Check preset buttons
    expect(screen.getByText("LET 变量计算实操")).toBeInTheDocument();
    expect(screen.getByText("XLOOKUP 负责人查询")).toBeInTheDocument();
    expect(screen.getByText("VLOOKUP 奖金计算")).toBeInTheDocument();
  });

  it("allows adding a new row to the employee data grid", () => {
    render(<FormulaSandbox />);
    
    // Check initial row count of both tables (Primary: 6, Dept: 6 => 12 total)
    const initialRows = screen.getAllByRole("row");
    expect(initialRows.length).toBe(12);

    // Click "➕ 新增行" button
    const addRowBtn = screen.getByText("➕ 新增行");
    fireEvent.click(addRowBtn);

    // Verify row count increased
    const updatedRows = screen.getAllByRole("row");
    expect(updatedRows.length).toBe(13);
  });

  it("allows adding a new row to the department configuration grid", () => {
    render(<FormulaSandbox />);
    
    // Click "➕ 新增部门" button
    const addDeptBtn = screen.getByText("➕ 新增部门");
    fireEvent.click(addDeptBtn);

    // Verify row count increased
    const updatedRows = screen.getAllByRole("row");
    expect(updatedRows.length).toBe(13);
  });

  it("can execute XLOOKUP formula and display results", async () => {
    render(<FormulaSandbox />);
    
    // Input formula
    const textareas = screen.getAllByPlaceholderText("在此输入 Excel 公式...") as HTMLTextAreaElement[];
    expect(textareas.length).toBeGreaterThan(0);
    const textarea = textareas[0];
    
    // Enter XLOOKUP formula
    fireEvent.change(textarea, { target: { value: "XLOOKUP(dept, deptNames, deptManagers)" } });
    
    // Click "运行计算 Run"
    const runBtn = screen.getByText("运行计算 Run");
    fireEvent.click(runBtn);

    // handleRun yields via setTimeout(0) before setting results — wait for DOM update
    await waitFor(() => {
      expect(screen.getByText("负责人 Manager")).toBeInTheDocument();
    });
    
    // E001 (开发) -> 王五, E002 (设计) -> 赵六, E004 (运营) -> 孙八
    expect(screen.getAllByText("王五").length).toBeGreaterThan(0);
    expect(screen.getAllByText("赵六").length).toBeGreaterThan(0);
    expect(screen.getAllByText("孙八").length).toBeGreaterThan(0);
  });

  it("can execute VLOOKUP formula and display results", async () => {
    render(<FormulaSandbox />);
    
    // Input formula
    const textareas = screen.getAllByPlaceholderText("在此输入 Excel 公式...") as HTMLTextAreaElement[];
    expect(textareas.length).toBeGreaterThan(0);
    const textarea = textareas[0];
    
    // Enter VLOOKUP formula
    fireEvent.change(textarea, { target: { value: "VLOOKUP(dept, deptTable, 3, FALSE) * salary" } });
    
    // Click "运行计算 Run"
    const runBtn = screen.getByText("运行计算 Run");
    fireEvent.click(runBtn);

    // handleRun yields via setTimeout(0) before setting results — wait for DOM update
    await waitFor(() => {
      expect(screen.getByText("奖金 Bonus")).toBeInTheDocument();
    });
    
    // E001 (开发: 0.20 * 6500 = 1300)
    expect(screen.getByText("¥1,300")).toBeInTheDocument();
  });

  it("can switch templates to inventory control and run calculations", () => {
    render(<FormulaSandbox />);
    
    // Switch template to inventory control
    const inventoryBtn = screen.getByText("📦 商品库存控制");
    fireEvent.click(inventoryBtn);
    
    // Verify column headers updated
    expect(screen.getByText("商品 ID")).toBeInTheDocument();
    expect(screen.getByText("商品名称")).toBeInTheDocument();
    
    // Input formula
    const textareas = screen.getAllByPlaceholderText("在此输入 Excel 公式...") as HTMLTextAreaElement[];
    const textarea = textareas[0];
    fireEvent.change(textarea, { target: { value: "IF(math < 20, \"Reorder\", \"Safe\")" } });
    
    // Run
    const runBtn = screen.getByText("运行计算 Run");
    fireEvent.click(runBtn);
    
    // I003 math is 15 -> Reorder
    expect(screen.getAllByText(/Reorder/i).length).toBeGreaterThan(0);
  });
});
