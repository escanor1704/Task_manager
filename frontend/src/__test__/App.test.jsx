import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/task/i)).toBeDefined();
  });
});