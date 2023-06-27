import { ReactNode } from 'react';
import './NavItemView.css';
import useNavItemViewController from './NavItemViewController';

type Props = {
  title: string;
  IconSVG: ReactNode;
  selected?: boolean;
};

const NavItemView = (props: Props) => {
  const { title, IconSVG, selected } = props;
  const { getNavClassNames } = useNavItemViewController();
  const classNames = getNavClassNames(!!selected);

  return (
    <a className={classNames} data-testid="nav-item" href="#">
      {IconSVG && (
        <div className="nav__svg" data-testid="nav-svg">
          {IconSVG}
        </div>
      )}
      <span className="nav__title">{title}</span>
    </a>
  );
};

export default NavItemView;
