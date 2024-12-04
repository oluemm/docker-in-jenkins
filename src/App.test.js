import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn Jenkins link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn Jenkins/i);
  expect(linkElement).toBeInTheDocument();
});
test("renders my name", () => {
  render(<App />);
  const linkElement = screen.getByText(/Emmanuel/i);
  expect(linkElement).toBeInTheDocument();
});
