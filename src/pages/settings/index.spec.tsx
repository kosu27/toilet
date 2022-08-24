/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import Settings from "pages/settings";

describe("Settings", () => {
  it("renders a heading", () => {
    render(<Settings />);
    const heading = screen.getByRole("heading", { name: /Settings/i });
    expect(heading).toBeInTheDocument();
  });
});
