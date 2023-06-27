import './Logo.css';
import { ReactComponent as LogoSVG } from '../../assets/img/logo.svg';

const Logo = () => {
  return (
    <div className="logo-container" data-testid="logo-component">
      <LogoSVG />
      <h1 className="logo-container__name">
        <span className="logo-container__text--red">my</span> glicemia
      </h1>
      <h3 className="logo-container__slogan">
        measure <span className="logo-container__text--red">today</span>
        better <span className="logo-container__text--red">tomorrow</span>
      </h3>
    </div>
  );
};

export default Logo;
