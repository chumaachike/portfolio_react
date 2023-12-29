import SocialMediaList from './SocialMediaList';
import arrow from '../images/arrow.png';

function HeadlineFlex() {
  return (
    <section className="headline flex">
      <h1 className="title">Hey there. I&rsquo;m Chuma</h1>
      {/* --Mobile version-- */}
      <h1 className="title-desk title-animation">Hey there. I&rsquo;m Chuma.</h1>
      {/* --Desktop version-- */}
      <h2 className="title subtitle title-animation">I&rsquo;m a software developer.</h2>
      <p className="supporting-text">
        I can help you build a product, feature, or website. Look through some of
        my work and experience! If you like what you see and want any form of collaboration,
        don&rsquo;t hesitate to contact me.
      </p>

      <SocialMediaList />
      <a id="works" href="#projects" className="info-button flex size-animation" title="Display info">
        <div className="arrow-container flex">
          <img
            className="arrow"
            src={arrow}
            width="24"
            height="24"
            alt="Display info"
          />
        </div>
      </a>
    </section>
  );
}

export default HeadlineFlex;
