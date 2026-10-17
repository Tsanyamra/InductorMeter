// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders InductorMeter title', () => {
    render(<App />);
    const titleElement = screen.getByText(/InductorMeter/i);
    expect(titleElement).toBeInTheDocument();
});
