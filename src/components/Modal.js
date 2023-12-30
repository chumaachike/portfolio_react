import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import closeBtn from '../images/close_pop_desktop.png';
import liveImg from '../images/see_live.png';
import sourceImg from '../images/see_src.png';

function Modal({
  technologies, imgSrc, name, descriptions, liveLink, sourceLink, onClose,
}) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);
  const renderedElement = technologies.map((tech) => <li key={uuidv4()}><button type="button" className="cards-lang-button" href="#">{tech}</button></li>);
  return ReactDOM.createPortal(
    <button onClick={onClose} type="button">
      <div className="popup-container">
        <div className="pop-body">
          <button className="close-btn" type="button" onClick={onClose}>
            <img className="close-img-mob" src={closeBtn} alt="Close button" />
          </button>
          <img className="pop-img" src={imgSrc} alt={name} />
          <h3 className="pop-title">{name}</h3>
          <ul className="cards-lang flex pop-lang">
            {renderedElement}
          </ul>
          <p className="pop-description">{descriptions}</p>
          <div className="pop-btn-cont">
            <a className="access-button" href={liveLink} target="_blank" rel="noreferrer">
              See Live
              <img className="pop-icon" src={liveImg} alt="See live version icon" />
            </a>
            <a className="access-button" href={sourceLink} target="_blank" rel="noreferrer">
              See Source
              <img className="pop-icon" src={sourceImg} alt="GitHub icon" />
            </a>
          </div>
        </div>
      </div>
    </button>, document.querySelector('.modal-container'),
  );
}

export default Modal;
