import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Logo from './Logo';

describe('Logo test', () => {
  it('Should render Logo', () => {
    const { findByTestId } = render(<Logo />);
    expect(findByTestId('logo-component')).toBeDefined();
  });
});
