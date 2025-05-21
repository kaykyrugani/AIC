import React, { useState, useEffect } from 'react';
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
  { 
    icon: faFacebook, 
    url: "#",
    ariaLabel: "Facebook"
  },
  { 
    icon: faLinkedin, 
    url: "#",
    ariaLabel: "LinkedIn"
  },
  { 
    icon: faWhatsapp, 
    url: "https://wa.me/5599999999999?text=Olá,%20gostaria%20de%20mais%20informações",
    ariaLabel: "WhatsApp"
  },
  { 
    icon: faInstagram, 
    url: "#",
    ariaLabel: "Instagram"
  },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.ContainerLogo}>
        <a href="/" aria-label="Página inicial">
          <img 
            src={Logo} 
            alt="AIC - Agência de Inteligência Concorrencial" 
            width="180"
            height="50"
          />
        </a>
      </div>
      
      <div className={styles.ContainerCta}>
        <nav className={styles.headerSocial} aria-label="Redes sociais">
          {socialLinks.map(({ icon, url, ariaLabel }, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={ariaLabel}
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </nav>
        <Cta
          text="Fale Conosco"
          size="medium"
          link="https://wa.me/5599999999999?text=Olá,%20gostaria%20de%20mais%20informações"
          ariaLabel="Entre em contato conosco via WhatsApp"
        />
      </div>
    </header>
  );
}

export default Header;