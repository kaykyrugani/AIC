import react from 'react';
import styles from './Cta.module.css';

const Cta = ({ text, size = 'medium', link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.cta} ${styles[size]}`}
    >
      {text}
    </a>
  );
};

export default Cta;


