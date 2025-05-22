import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaMapMarkedAlt, FaRegClock } from "react-icons/fa";
import Logo from "../../assets/imgs/Logo.png";

const socialLinks = [
  { 
    icon: faWhatsapp, 
    url: "https://wa.me/5511968981392?text=Olá,%20gostaria%20de%20mais%20informações",
    label: "WhatsApp"
  },
  { 
    icon: faInstagram, 
    url: "https://www.instagram.com/aic.pi/",
    label: "Instagram"
  }
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
                  <p className={styles.infoText}>(11) 96898-1392</p>
                </div>
              </div>
            </div>
            
            <div className={styles.footerRow}>
              <div className={styles.footerInfoItem}>
                <FontAwesomeIcon icon={faEnvelope} className={styles.iconImg} />
                <div>
                  <p className={styles.infoLabel}>E-mail</p>
                  <p className={styles.infoText}>atendimento@agenciadeinteligencia.com.br</p>
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
          &copy; {currentYear} AIC - Agência de Inteligência Concorrencial. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;