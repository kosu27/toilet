/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import SignIn from "pages/sign-in";

describe("Index", () => {
  it("renders a heading", () => {
    render(<SignIn />);
    const heading = screen.getByRole("heading", { name: /SignIn/i });
    expect(heading).toBeInTheDocument();
  });
});
