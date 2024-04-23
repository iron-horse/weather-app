import { render, screen } from '@testing-library/react';
import DailyHighlights from './daily-highlights';

describe("Daily Highlights", () => {
  test('renders correctly', () => {
    const weather = {
        dt: Date.parse(new Date())/1000,
        weather: [{
                description: "sunny",
                icon: "10d"
            }],
        temp: {
            min: 1,
            max: 10
        }};
    render(<DailyHighlights weather={weather}/>);
    const todayHightlights = screen.getByText(/Today/i);
    expect(todayHightlights).toBeInTheDocument();
  });
});


