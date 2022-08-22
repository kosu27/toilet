/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import ForgotPassword from "pages/forgot-password";

describe("ForgotPassword", () => {
  it("renders a heading", () => {
    render(<ForgotPassword />);
    const heading = screen.getByRole("heading", { name: /ForgotPassword/i });
    expect(heading).toBeInTheDocument();
  });
});
