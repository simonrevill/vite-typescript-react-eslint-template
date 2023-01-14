import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import App from './App';

describe('App', () => {
  it('Renders hello world', () => {
    // Arrange
    render(<App />);
    // Act
    // Assert
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Hello, world!'
    );
  });
});
