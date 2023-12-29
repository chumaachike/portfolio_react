import SocialMediaList from './SocialMediaList';

function Footer() {
  return (
    <section id="form" className="flex form-container">
      <h2 className="form-text">
        I&apos;m always interested in hearing about new projects, so if you&apos;d like to
        chat please get in touch.
      </h2>
      <form
        id="contact-form"
        className="form flex"
        action="https://formspree.io/f/mayvdjkb"
        method="post"
      >
        <input
          id="user-name"
          className="box"
          name="user-name"
          type="text"
          maxLength="30"
          placeholder="Full name"
          required
        />
        <input
          id="email"
          className="box"
          name="user-email"
          type="email"
          placeholder="Email adress"
          required
        />
        <textarea
          id="user-msg"
          className="box box-textarea"
          name="user-msg"
          maxLength="500"
          placeholder="Enter text here"
          required
        />
        <button className="access-button form-btn" type="submit">
          Get in touch
        </button>
        <div className="msg-cont hidden">
          <p className="error-msg" />
        </div>
      </form>
      <SocialMediaList className="social-media-form" />
      <div className="final-line" />
    </section>
  );
}

export default Footer;
