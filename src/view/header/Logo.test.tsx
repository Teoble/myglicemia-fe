import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Logo test', () => {
  it('Should render Logo', () => {
    render(<Logo />);
    expect(screen.findByTestId('logo-component')).toBeDefined();
  });
});
