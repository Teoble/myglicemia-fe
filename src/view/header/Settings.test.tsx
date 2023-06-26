import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Settings from './Settings';

describe('Settings test', () => {
  it('Should render Settings', () => {
    render(<Settings />);
    expect(screen.findByTestId('logo-component')).toBeDefined();
  });
});
