import React from 'react';
import { AwesomeButtonSocial } from 'react-awesome-button';

const Footer = () => {
  return (
    <footer>
      <AwesomeButtonSocial className="mx-2" type="facebook" />
      <AwesomeButtonSocial className="mx-2" type="twitter" />
      <AwesomeButtonSocial
        className="mx-2"
        type="github"
        href="https://github.com/ipudu/card-flipping-game"
      />
    </footer>
  );
};

export default Footer;
