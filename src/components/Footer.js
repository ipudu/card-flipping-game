import React from 'react';
import { AwesomeButtonSocial } from 'react-awesome-button';

const Footer = () => {
  return (
    <footer>
      <div>
        <AwesomeButtonSocial className="mx-2" type="facebook" size="small" />
        <AwesomeButtonSocial className="mx-2" type="twitter" size="small" />
        <AwesomeButtonSocial
          className="mx-2"
          type="github"
          size="small"
          href="https://github.com/ipudu/card-flipping-game"
        />
      </div>
    </footer>
  );
};

export default Footer;
