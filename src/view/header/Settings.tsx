import './Settings.css';
import { ReactComponent as SettingSVG } from '../../assets/img/icons/setting.svg';

const Settings = () => {
  return (
    <div className="setting" data-testid="setting-component">
      <button className="setting__button">
        <SettingSVG />
        <span>Settings</span>
      </button>
    </div>
  );
};

export default Settings;
