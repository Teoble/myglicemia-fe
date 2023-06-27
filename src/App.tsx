import Logo from './view/header/Logo';
import Settings from './view/header/Settings';
import NavView from './view/nav/NavView';

function App() {
  return (
    <>
      <header>
        <Settings />
        <Logo />
        <NavView />
      </header>
    </>
  );
}

export default App;
