import profilePic from '../images/chuma.png';
import lang from '../images/language.png';
import framwork from '../images/frameworks.png';
import skill from '../images/skills.png';

function About() {
  return (
    <section id="about" className="recent-works about-me flex">
      <h2 id="about-title" className="title works-title">About me</h2>
      <div className="flex about-desc">
        <div className="flex photo">
          <img
            src={profilePic}
            width="300"
            alt="Profile Pic"
            title="Custome link"
          />
        </div>
        <div className="desc">
          <p className="about-text">
            As a seasoned freelance software engineer, I bring a wealth of experience
            in the tech realm,
            having previously served as the Head of ICT at UNN Business School.
            Specializing as a certified AWS Solutions Associate.
            I excel in crafting full-stack solutions and cloud-based architectures.
            My expertise lies in delivering scalable, secure, and innovative applications.
          </p>
          <a href="./documents/Resume.pdf" target="_blank" className="access-button about-btn">Get My Resume</a>
        </div>
      </div>
      <div className="works-container cv-container flex">
        <div className="cv-cell flex">
          <button type="button" className="cv-img flex">
            <img
              src={lang}
              width="48"
              height="48"
              alt="Languages card icon"
              title="Languages"
            />
          </button>
          <h2 className="cv-cell-title">Languages</h2>
          <ul className="cv-feat-cont cv-feat-cont-margin-1 flex">
            <li><button className="cv-feat-btn" type="button">JavaScript</button></li>
            <li><button className="cv-feat-btn" type="button">Python</button></li>
            <li><button className="cv-feat-btn" type="button">Java</button></li>
            <li><button className="cv-feat-btn" type="button">Ruby</button></li>
            <li><button className="cv-feat-btn" type="button">C++</button></li>
          </ul>
        </div>
        <div className="cv-cell flex">
          <button type="button" className="cv-img flex">
            <img
              src={framwork}
              width="48"
              height="48"
              alt="Frameworks card icon"
              title="Frameworks"
            />
          </button>
          <h2 className="cv-cell-title">Frameworks</h2>
          <ul className="cv-feat-cont flex">
            <li><button className="cv-feat-btn" type="button">RoR</button></li>
            <li><button className="cv-feat-btn" type="button">React</button></li>
            <li><button className="cv-feat-btn" type="button">Redux</button></li>
            <li><button className="cv-feat-btn" type="button">RSpec</button></li>
            <li><button className="cv-feat-btn" type="button">Spring</button></li>
            <li><button className="cv-feat-btn" type="button">Django</button></li>
          </ul>
        </div>
        <div className="cv-cell flex">
          <button type="button" className="cv-img flex">
            <img
              src={skill}
              width="48"
              height="48"
              alt="Skills card icon"
              title="Skills"
            />
          </button>
          <h2 className="cv-cell-title">Skills</h2>
          <ul className="cv-feat-cont cv-feat-cont-margin-3 flex">
            <li><button className="cv-feat-btn" type="button">Leadership</button></li>
            <li><button className="cv-feat-btn" type="button">Team work</button></li>
            <li><button className="cv-feat-btn" type="button">Github</button></li>
            <li><button className="cv-feat-btn" type="button">Codepen</button></li>
            <li><button className="cv-feat-btn" type="button">Netlify</button></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
