import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaMapMarkedAlt, FaRegClock } from "react-icons/fa";
import Logo from "../../assets/imgs/Logo.png";

const socialLinks = [
  { 
    icon: faFacebook, 
    url: "#",
    label: "Facebook"
  },
  { 
    icon: faLinkedin, 
    url: "#",
    label: "LinkedIn"
  },
  { 
    icon: faWhatsapp, 
    url: "#",
    label: "WhatsApp"
  },
  { 
    icon: faInstagram, 
    url: "#",
    label: "Instagram"
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerMainContent}>
          {/* Informações de Contato */}
          <div className={styles.footerInfo}>
            <h3 className={styles.sectionTitle}>Entre em Contato</h3>
            
            <div className={styles.footerRow}>
              <div className={styles.footerInfoItem}>
                <FaMapMarkedAlt className={styles.iconImg} />
                <div>
                  <p className={styles.infoLabel}>São Paulo – SP</p>
                  <p className={styles.infoText}>Avenida Brigadeiro Faria Lima, 1739</p>
                </div>
              </div>
            </div>
            
            <div className={styles.footerRow}>
              <div className={styles.footerInfoItem}>
                <FaRegClock className={styles.iconImg} />
                <div>
                  <p className={styles.infoLabel}>Horário de Atendimento</p>
                  <p className={styles.infoText}>Segunda a sexta: 09:00 às 18:00</p>
                </div>
              </div>
            </div>
            
            <div className={styles.footerRow}>
              <div className={styles.footerInfoItem}>
                <FontAwesomeIcon icon={faPhone} className={styles.iconImg} />
                <div>
                  <p className={styles.infoLabel}>Telefone</p>
                  <p className={styles.infoText}>(16) 99999-9999</p>
                </div>
              </div>
            </div>
            
            <div className={styles.footerRow}>
              <div className={styles.footerInfoItem}>
                <FontAwesomeIcon icon={faEnvelope} className={styles.iconImg} />
                <div>
                  <p className={styles.infoLabel}>E-mail</p>
                  <p className={styles.infoText}>contato@ccsadvogados.com.br</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Logo e Redes Sociais */}
          <div className={styles.footerLogo}>
            <img 
              src={Logo} 
              alt="CCS Advogados - Logo" 
              className={styles.footerLogoImg} 
              width="200"
              height="auto"
              loading="lazy"
            />
            <div className={styles.footerSocial}>
              {socialLinks.map(({ icon, url, label }, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={`Acesse nosso ${label}`}
                >
                  <FontAwesomeIcon 
                    icon={icon} 
                    className={styles.icon} 
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className={styles.footerCopy}>
        <p>
          &copy; {currentYear} CCS Advogados. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;