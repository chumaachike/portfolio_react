import classNames from 'classnames';
import PropTypes from 'prop-types';
import SocialMediaIcon from './SocialMediaIcon';
import twitter from '../images/twitter.png';
import linkdin from '../images/linkedin.png';
import medium from '../images/medium.png';
import github from '../images/github.png';
import angellist from '../images/angellist.png';
import mail from '../images/mail.png';

function SocialMediaList({ className }) {
  const finalCLassNames = classNames(
    'social-media-icons flex',
    className,
  );
  return (
    <ul className={finalCLassNames}>
      <SocialMediaIcon
        link="https://twitter.com/achikechuma"
        imgSrc={twitter}
        alt="Twitter Icon"
        title="Twitter"
      />
      <SocialMediaIcon
        link="https://www.linkedin.com/in/edwardachike/"
        imgSrc={linkdin}
        alt="LinkedIn Icon"
        title="LinkedIn"
      />
      <SocialMediaIcon
        link="https://www.linkedin.com/in/edwardachike/"
        imgSrc={medium}
        alt="Medium Icon"
        title="Medium"
      />
      <SocialMediaIcon
        link="https://www.linkedin.com/in/edwardachike/"
        imgSrc={github}
        alt="Github Icon"
        title="Github"
      />
      <SocialMediaIcon
        link="https://www.linkedin.com/in/edwardachike/"
        imgSrc={angellist}
        alt="Angellist Icon"
        title="Angellist"
      />
      <SocialMediaIcon
        link="https://www.linkedin.com/in/edwardachike/"
        imgSrc={mail}
        alt="Mail Icon"
        title="Mail"
      />
    </ul>
  );
}

SocialMediaList.propTypes = {
  className: PropTypes.string,
};
SocialMediaList.defaultProps = {
  className: '',
};

export default SocialMediaList;
