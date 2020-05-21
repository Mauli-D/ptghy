import React from 'react';

const SocialLinks = props => {
    return (
      <div className="social">
        <a
          href="https://twitter.com/Dhvanit24"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's Twitter profile"
        >
          {' '}
          <i className="fab fa-twitter" />
        </a>
        <a
          id="profile-link"
          href="https://github.com/200382214"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's GitHub Profile"
        >
          {' '}
          <i className="fab fa-github" />
        </a>
        <a
          href="https://www.instagram.com/krunal_1516/"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's Codepen Profile"
        >
          {' '}
          <i className="fab fa-instagram" />
        </a>
      </div>
    );
  };
  export default SocialLinks;