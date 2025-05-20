import React from 'react';
import styles from './Header.module.css';
import Logo from '../../assets/imgs/Logo.png';
import Cta from '../../components/Cta/Cta';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  { icon: faFacebook, url: "#" },
  { icon: faLinkedin, url: "#" },
  { icon: faWhatsapp, url: "#" },
  { icon: faInstagram, url: "#" },
];

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.ContainerLogo}>
        <img src={Logo} alt="Logo" />
      </div>
      
      <div className={styles.ContainerCta}>
        <div className={styles.headerSocial}>
          {socialLinks.map(({ icon, url }, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FontAwesomeIcon icon={icon} className={styles.icon} />
            </a>
          ))}
        </div>
        <Cta
          text="Chamar no WhatsApp"
          size="medium"
          link="https://wa.me/5599999999999?text=Olá,%20gostaria%20de%20mais%20informações"
        />
      </div>
    </header>
  );
}

export default Header;