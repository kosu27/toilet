/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import SignUp from "pages/sign-up";

describe("SignUp", () => {
  it("renders a heading", () => {
    render(<SignUp />);
    const heading = screen.getByRole("heading", { name: /SignUp/i });
    expect(heading).toBeInTheDocument();
  });
});
