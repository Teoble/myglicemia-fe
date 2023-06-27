import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Settings from './Settings';

describe('Settings test', () => {
  it('Should render Settings', () => {
    const { findByTestId } = render(<Settings />);
    expect(findByTestId('setting-component')).toBeTruthy();
  });
});
