import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn Jenkins link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn Jenkins/i);
  expect(linkElement).toBeInTheDocument();
});

test("contains app version paragraph", () => {
  render(<App />);
  const appVersion = screen.getByText(/emmanuel version/i);
  expect(appVersion).toBeInTheDocument();
});

test("test trigger", () => {
  render(<App />);
  const appVersion = screen.getByText(/emmanuel version/i);
  expect(appVersion).toBeInTheDocument();
});
