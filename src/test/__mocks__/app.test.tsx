import App from "@/App";
import { render, fireEvent, screen } from "@testing-library/react";

// Mocking the console.log
jest.spyOn(console, "log").mockImplementation(() => {});

describe("App Component", () => {
  it("should render the component initially", () => {
    render(<App />);
    
    // Initially, we can check that the login button is in the document.
    expect(screen.getByText("Login")).toBeInTheDocument();
  });


  it("should change loggedIn state when handleLogin is called", () => {
    render(<App />);
    
    // Initial state should be logged out
    expect(screen.getByText("Login")).toBeInTheDocument();

    // Simulate login
    fireEvent.click(screen.getByText("Login"));
    
    // After clicking the login button, the mock fetch will be triggered
    expect(screen.queryByText("Login")).not.toBeInTheDocument();
  });

});
