import App from "@/App";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";

// Mocking the console.log
jest.spyOn(console, "log").mockImplementation(() => {});

describe("App Component", () => {
  it("should render the component initially", () => {
    render(<App />);
    
    // Initially, we can check that the login button is in the document.
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("should change loggedIn state when handleLogin is called", async () => {
    render(<App />);
    
    // Initial state should be logged out
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();

    // Simulate login
    fireEvent.click(screen.getByRole("button", { name: /login/i }));
    
    // After clicking the login button, wait for the items to be fetched
    await waitFor(() => expect(screen.queryByRole("button", { name: /login/i })).not.toBeInTheDocument());
  });

  it("should add items to the cart", async () => {
    render(<App />);

    // Simulate login
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    // Wait for items to be fetched and displayed
    await waitFor(() => expect(screen.getByText("Yaourt")).toBeInTheDocument(), { timeout: 2000 });

    // Add item to cart
    fireEvent.click(screen.getAllByRole("button", { name: /Add to cart/i })[0]);

    // Check if item is added to the cart
    await waitFor(() => expect(screen.getByText("Yaourt (x1)")).toBeInTheDocument());
  });

 it("should remove items from the cart", async () => {
    render(<App />);

    // Simulate login
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    // Wait for items to be fetched and displayed
    await waitFor(() => expect(screen.getByText("Fermented Products")).toBeInTheDocument(), { timeout: 2000 });

    // Add item to cart
    fireEvent.click(screen.getAllByRole("button", { name: /Add to cart/i })[0]);

    // Check if item is added to the cart
    expect(screen.getByText(/Yaourt \(x1\)/i)).toBeInTheDocument();

    // Remove item from cart
    fireEvent.click(screen.getByRole("button", { name: /Remove/i }));

    // Check if item is removed from the cart
    expect(screen.queryByText(/Yaourt \(x1\)/i)).not.toBeInTheDocument();
});

it("should calculate the total price correctly", async () => {
  render(<App />);

  // Simulate login
  fireEvent.click(screen.getByRole("button", { name: /login/i }));

  // Wait for items to be fetched and displayed
  await waitFor(() => expect(screen.getByText("Fermented Products")).toBeInTheDocument(), { timeout: 2000 });
  await waitFor(() => expect(screen.getByText("Soft Cheese")).toBeInTheDocument(), { timeout: 2000 });

  // Add items to cart
  fireEvent.click(screen.getAllByRole("button", { name: /Add to Cart/i })[0]);
  fireEvent.click(screen.getAllByRole("button", { name: /Add to Cart/i })[1]);

  // Check if items are added to the cart
  expect(screen.getByText(/Yaourt \(x1\)/i)).toBeInTheDocument();
  expect(screen.getByText(/Camembert \(x1\)/i)).toBeInTheDocument();

  // Check if total price is calculated correctly
  expect(screen.getByText(/Total: \$5.70/i)).toBeInTheDocument();
});

  it("should display shop items after login", async () => {
    render(<App />);

    // Simulate login
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    // Wait for items to be fetched and displayed
    await waitFor(() => expect(screen.getByText("Yaourt")).toBeInTheDocument(), { timeout: 2000 });
  });
});