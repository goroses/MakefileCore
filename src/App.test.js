// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Makefile title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Makefile/i);
    expect(titleElement).toBeInTheDocument();
});
