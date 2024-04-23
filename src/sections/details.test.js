import { render, screen } from '@testing-library/react';
import Details from './details';

describe("Details", () => {
  test('renders correctly', () => {
    const weather = {
        dt: Date.parse(new Date())/1000,
        main: {
            temp: 20,
            humidity: 40
        },
        visibility: 8000,
        wind: {
            deg: 200,
            speed: 9.5
        }
    }
    render(<Details weather={weather}/>);
    const temparature = screen.getByText(/20/i);
    expect(temparature).toBeInTheDocument();
    const wind = screen.getByText(/9.5/i);
    expect(wind).toBeInTheDocument();
    const visibility = screen.getByText(/8/i);
    expect(visibility).toBeInTheDocument();
  });
});


