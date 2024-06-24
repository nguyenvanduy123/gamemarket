import React from "react";
import * as Links from "../../../constant/Links";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Footer = () => {

  const socialIconsData = [
    { className: 'facebook', href: 'https://www.facebook.com/', iconClass: 'icon-social-facebook' },
    { className: 'twitter', href: 'https://twitter.com/', iconClass: 'icon-social-twitter' },
    { className: 'linkedin', href: 'https://www.linkedin.com/', iconClass: 'icon-social-linkedin' },
    { className: 'reddit', href: 'https://www.reddit.com/', iconClass: 'icon-social-reddit' },
    { className: 'vkontakte', href: 'https://discord.com/', iconClass: 'icon-social-vkontakte' },
    { className: 'youtube', href: 'https://www.youtube.com/', iconClass: 'icon-social-youtube' },
  ];

  const linkListData = [
    // { href: '/tier-system', label: 'Features' },
    { href: '/tokenomics', label: 'Roadmap' },
    { href: '/contact', label: 'How It Works' },
    { href: '/blog', label: 'Blog' },
    { href: '/farmming', label: 'Farming' },
  ];
  return (
    <footer className="footer-area footer-fixed bg-contain bottom-tab">

      <ul className="navbar-fixed-5 navbar-nav navbar-nav-f">
        <li className="nav-item item ml-2"><Link className="icon_bottom icon_bottom1" to="/Home"></Link></li>
        <li className="nav-item  item ml-2"><Link className="icon_bottom icon_bottom2" to="/Bag"></Link></li>
        <li className="nav-item  item ml-2"><Link className="icon_bottom icon_bottom3" to="/Node"></Link></li>
        <li className="nav-item  item ml-2"><Link className="icon_bottom icon_bottom4" to="/Market"></Link></li>
      </ul>


    </footer>
  );
};

export default Footer;
