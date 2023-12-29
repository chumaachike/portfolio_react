import { useState } from 'react';
import imgMenu from '../images/menu.png';
import Popup from './Popup';

function Header() {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  return (
    <header className="flex">
      {showPopup ? (
        <Popup togglePopup={setShowPopup} />
      ) : (
        <>
          {/* Mobile version */}
          <button type="button" className="logo-container flex" href="#">
            <span className="logo">Welcome</span>
          </button>
          <nav className="menu-button">
            <button
              type="button"
              className="menu-anchor flex"
              href="#"
              onClick={handleClick}
            >
              <img
                src={imgMenu}
                width="20"
                height="20"
                alt="Menu"
                title="Menu"
              />
            </button>
          </nav>
        </>
      )}

      {/* --Desktop version */}
      <nav className="menu-bar">
        <a className="menu-opt-cont flex" href="#projects">
          <span className="menu-opt">Portfolio</span>
        </a>
        <a className="menu-opt-cont flex" href="#about">
          <span className="menu-opt">About</span>
        </a>
        <a className="menu-opt-cont flex" href="#form">
          <span className="menu-opt">Contact</span>
        </a>
        <a
          className="menu-opt-cont flex"
          href="https://www.youtube.com/channel/UCKmOGDm2gQ-XydtP0Xrt5zQ"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button" className="menu-opt" id="blog-button">
            Youtube
          </button>
        </a>
      </nav>
    </header>
  );
}

export default Header;
