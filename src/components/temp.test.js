import { render, screen } from '@testing-library/react';
import Temp from './temp';
import { FahrenheitContext } from "../context";

describe("Temperature", () => {
  test('renders correctly', () => {
    render(<Temp temp={20}/>);
    const temperature = screen.getByText(/20/i);
    expect(temperature).toBeInTheDocument();
  });

  test('renders correctly in F', () => {
    render(<FahrenheitContext.Provider value={true}><Temp temp={20}/></FahrenheitContext.Provider>)
    const temperature = screen.getByText(/68/i);
    const fahrenheit = screen.getByText(/°F/i);
    expect(temperature).toBeInTheDocument();
    expect(fahrenheit).toBeInTheDocument();
  });
});


