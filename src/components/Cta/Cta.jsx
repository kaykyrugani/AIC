import react from 'react';
import styles from './Cta.module.css';

const Cta = ({ text, size = 'medium', link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="https://wa.me/5511968981392?text=Olá,%20gostaria%20de%20mais%20informações"
      className={`${styles.cta} ${styles[size]}`}
    >
      {text}
    </a>
  );
};

export default Cta;


