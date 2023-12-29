import { useState } from 'react';
import Project from './Project';
import works from '../utils/works';
import Modal from './Modal';

function ProjectList() {
  const [showModal, setShowModal] = useState(false);
  const [work, setWork] = useState(null);
  const handleClick = (id) => {
    setShowModal(true);
    setWork(works[id - 1]);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  const renderedElement = works.map((work) => (
    <Project
      id={work.id}
      technologies={work.technologies}
      imgSrc={work.imageLocation}
      alt={work.name}
      projectTitle={work.name}
      key={work.id}
      handleClick={handleClick}
    />
  ));

  return (
    <section id="projects" className="recent-works flex">
      <h2 className="title works-title works-title-mob">
        My Recent
        <br />
        Works
      </h2>
      {/* --Mobile version--*/}
      <h2 className="title works-title works-title-desk">My Recent Works</h2>
      {/* --Desktop version-- */}
      <div className="works-title-line" />
      <div className="works-container flex">
        {renderedElement}
      </div>
      {showModal
            && (
            <Modal
              name={work.name}
              imgSrc={work.imageLocation}
              descriptions={work.description}
              liveLink={work.live}
              sourceLink={work.source}
              technologies={work.technologies}
              onClose={handleClose}
            />
            )}
    </section>
  );
}

export default ProjectList;
