import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";
import { describe, expect, test, vi } from "vitest";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

describe("Login Component", () => {
  test("renders Login button", () => {
    render(<Login />);
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  test("navigates to /add on Login button click", () => {
    render(<Login />);
    const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);
    expect(mockNavigate).toHaveBeenCalledWith("/add");
  });
});
