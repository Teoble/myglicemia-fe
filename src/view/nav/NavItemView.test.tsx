import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import NavItemView from './NavItemView';
import { ReactComponent as EditSVG } from '../../assets/img/icons/edit.svg';

describe('NavItemView test', () => {
  it('Should render NavItem', () => {
    const { getByTestId } = render(<NavItemView title="Test" IconSVG={null} />);
    expect(getByTestId('nav-item')).toBeTruthy();
  });

  it('Should not have the SVG', () => {
    const { queryByTestId } = render(
      <NavItemView title="Test" IconSVG={null} />
    );
    expect(queryByTestId('nav-svg')).toBeNull();
  });

  it('Should have the SVG', () => {
    const { getByTestId } = render(
      <NavItemView title="Test" IconSVG={<EditSVG />} />
    );
    expect(getByTestId('nav-svg')).toBeTruthy();
  });

  it('Should have be selectable', () => {
    const { getByTestId } = render(
      <NavItemView title="Test" IconSVG={<EditSVG />} selected={true} />
    );
    expect(getByTestId('nav-item')).toHaveClass('nav__item--selected');
  });
});
