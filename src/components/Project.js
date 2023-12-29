import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function Project({
  technologies, imgSrc, alt, projectTitle, id, handleClick,
}) {
  const renderedElement = technologies.map((tech) => (
    <li key={uuidv4()}><button type="button" className="cards-lang-button" href="#">{tech}</button></li>
  ));
  const handleButtonClick = () => {
    handleClick(id);
  };
  return (
    <div className="works flex">
      <div className="cards-img-cont">
        <img className="card-img" src={imgSrc} alt={alt} />
      </div>
      <div className="cards flex">
        <h2 className="cards-title">{projectTitle}</h2>
        <ul className="cards-lang flex">
          {renderedElement}
        </ul>
        <button type="button" onClick={handleButtonClick} className="access-button" href="#">See Project</button>
      </div>
    </div>
  );
}

Project.propTypes = {
  technologies: PropTypes.instanceOf(Array).isRequired,
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  projectTitle: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Project;
