import { render, screen } from '@testing-library/react';
import App from './App';

describe("Use Fahrenheit feature", () => {
  test('renders with use fahrenheit option', () => {
    render(<App />);
    const useFahrenheit = screen.getByText(/Use Fahrenheit/i);
    expect(useFahrenheit).toBeInTheDocument();
  });
});


describe("Search", () => {
  test('renders with Calgary as default', () => {
    render(<App />);
    const calgaryCity = screen.getByText(/Calgary/i);
    expect(calgaryCity).toBeInTheDocument();
  });
})

