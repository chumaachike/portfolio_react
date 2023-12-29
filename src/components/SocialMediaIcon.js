import PropTypes from 'prop-types';

function SocialMediaIcon({
  link, imgSrc, alt, title,
}) {
  return (
    <li className="social-media-icons-list">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={imgSrc}
          width="20"
          height="20"
          alt={alt}
          title={title}
        />
      </a>
    </li>
  );
}

SocialMediaIcon.propTypes = {
  link: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SocialMediaIcon;
