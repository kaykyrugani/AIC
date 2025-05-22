import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';
// Logo agora está na pasta public/imgs
import Cta from '../../components/Cta/Cta';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { 
  faInstagram,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  { 
    icon: faWhatsapp, 
    url: "https://wa.me/5511968981392?text=Olá,%20gostaria%20de%20mais%20informações",
    ariaLabel: "WhatsApp"
  },
  { 
    icon: faInstagram, 
    url: "https://www.instagram.com/aic.pi/",
    ariaLabel: "Instagram"
  }
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showSocialMenu, setShowSocialMenu] = useState(false);
  const socialMenuRef = useRef(null);

  // Fechar o menu de redes sociais ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (socialMenuRef.current && !socialMenuRef.current.contains(event.target)) {
        setShowSocialMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

  const toggleSocialMenu = () => {
    setShowSocialMenu(!showSocialMenu);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.ContainerLogo}>
        <a href="/" aria-label="Página inicial">
          <img 
            src="/imgs/Logo.png" 
            alt="AIC - Agência de Inteligência Concorrencial" 
            width="180"
            height="50"
          />
        </a>
      </div>
      
      <div className={styles.ContainerCta}>
        {/* Menu de redes sociais para desktop */}
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

        {/* Botão de menu de redes sociais para mobile */}
        <div 
          className={`${styles.socialMenuContainer} ${showSocialMenu ? styles.active : ''}`} 
          ref={socialMenuRef}
        >
          <button 
            className={styles.socialMenuButton}
            onClick={toggleSocialMenu}
            aria-label={showSocialMenu ? "Ocultar redes sociais" : "Mostrar redes sociais"}
            aria-expanded={showSocialMenu}
            aria-controls="social-menu"
          >
            <FontAwesomeIcon icon={faShareAlt} className={styles.socialMenuIcon} />
          </button>
          
          {/* Menu de redes sociais para mobile */}
          {showSocialMenu && (
            <div className={styles.socialMenu} id="social-menu">
              {socialLinks.map(({ icon, url, ariaLabel }, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialMenuItem}
                  aria-label={ariaLabel}
                  onClick={() => setShowSocialMenu(false)}
                >
                  <FontAwesomeIcon icon={icon} className={styles.socialMenuIconItem} />
                  <span>{ariaLabel}</span>
                </a>
              ))}
            </div>
          )}
        </div>
        
        {/* Botão de CTA - visível apenas em desktop e quando o menu social não está ativo */}
        {!showSocialMenu && (
          <div className={styles.desktopCta}>
            <Cta
              text="FALE CONOSCO"
              size="medium"
              link="https://wa.me/5511968981392?text=Olá,%20gostaria%20de%20mais%20informações"
              ariaLabel="Entre em contato conosco via WhatsApp"
              className={styles.ctaButton}
            />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;