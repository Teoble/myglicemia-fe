import { ReactComponent as EditSVG } from '../../assets/img/icons/edit.svg';
import { ReactComponent as DeskSVG } from '../../assets/img/icons/desk.svg';
import { ReactNode } from 'react';
import NavItemView from './NavItemView';
import './NavView.css';

type NavItem = {
  title: string;
  icon: ReactNode;
};

const navItems: NavItem[] = [
  { title: 'Edit', icon: <EditSVG /> },
  { title: 'List', icon: <DeskSVG /> },
];

const NavView = () => {
  return (
    <nav className="nav__container">
      {navItems.map(nav => (
        <NavItemView title={nav.title} IconSVG={nav.icon} />
      ))}
    </nav>
  );
};

export default NavView;
