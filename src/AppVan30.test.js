import { render, screen } from "@testing-library/react";
import App from "./App";

test("30 select jelenik meg a DOM-ban", () => {
  render(<App />);
  const selects = screen.getAllByText("Válassz...");
  expect(selects).toHaveLength(30);
});
