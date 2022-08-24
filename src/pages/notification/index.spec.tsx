/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import Notification from "pages/notification";

describe("Notification", () => {
  it("renders a heading", () => {
    render(<Notification />);
    const heading = screen.getByRole("heading", { name: /Notification/i });
    expect(heading).toBeInTheDocument();
  });
});
