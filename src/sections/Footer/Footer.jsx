import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FaMapMarkedAlt, FaRegClock } from "react-icons/fa";
import Logo from "../../assets/imgs/logo.png";

const socialLinks = [
  { icon: faFacebook, url: "#" },
  { icon: faLinkedin, url: "#" },
  { icon: faWhatsapp, url: "#" },
  { icon: faInstagram, url: "#" },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <div className={styles.footerRow}>
            <div className={styles.footerInfoItem}>
              <FaMapMarkedAlt className={styles.iconImg} />
              <span>Franca – SP</span>
            </div>
            <div className={styles.footerInfoItem}>
              <span>Endereço: Rua Rita Rocha Vieira, 760, São José.</span>
            </div>
          </div>
          <div className={styles.footerRow}>
            <div className={styles.footerInfoItem}>
              <FaRegClock className={styles.iconImg} />
              <span>Segunda a sexta : 09:00 às 18:00</span>
            </div>
          </div>
          <div className={styles.footerRow}>
            <div className={styles.footerInfoItem}>
              <FontAwesomeIcon icon={faPhone} className={styles.iconImg} />
              <span>(11) 99999-9999</span>
            </div>
          </div>
        </div>
        <div className={styles.footerLogo}>
          <img src={Logo} alt="Logo" className={styles.footerLogoImg} />
          <div className={styles.footerSocial}>
            {socialLinks.map(({ icon, url }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={icon} className={styles.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;