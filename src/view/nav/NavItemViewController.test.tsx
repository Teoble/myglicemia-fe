import { describe, it, expect } from 'vitest';
import useNavItemViewController from './NavItemViewController';

describe('NavViewController test', () => {
  it('When the link is not selected, it should return just one class', () => {
    const { getNavClassNames } = useNavItemViewController();
    expect(getNavClassNames(false)).toBe('nav__item');
  });

  it('When the link is selected, it should return the selected class too', () => {
    const { getNavClassNames } = useNavItemViewController();
    expect(getNavClassNames(true)).toBe('nav__item nav__item--selected');
  });
});
