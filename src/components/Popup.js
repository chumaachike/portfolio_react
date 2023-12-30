import PropTypes from 'prop-types';
import close from '../images/close.png';

function Popup({ togglePopup }) {
  const handleClick = () => {
    togglePopup(false);
  };
  return (
    <nav className="interactive-menu">
      <button type="button" onClick={handleClick} className="close-menu"><img src={close} alt="Close menu" title="Close menu" /></button>
      <a href="#works" className="menu-option" onClick={handleClick}>Portfolio</a>
      <a href="#about" className="menu-option" onClick={handleClick}>About</a>
      <a href="#form" className="menu-option" onClick={handleClick}>Contact</a>
    </nav>
  );
}
Popup.propTypes = {
  togglePopup: PropTypes.func.isRequired,
};

export default Popup;
