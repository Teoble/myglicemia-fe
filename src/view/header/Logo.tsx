import './Logo.css';

const Logo = () => {
  return (
    <div className="logo-container" data-testid="logo-component">
      <img className="logo-container__logo" src="src/assets/img/logo.svg" />
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
