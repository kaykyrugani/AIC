import React from 'react';
import styles from './Header.module.css'; 
import Logo from '../../assets/imgs/Logo.png';
import Cta from '../../components/Cta/Cta';

function Header() {
  return (
    <header className={styles.header}> 
        <div className={styles.Containerlogo}>
            <img src={Logo} alt="Logo" />
        </div>
        <div className={styles.ContainerCta}>
             <Cta
        text="Chamar no WhatsApp"
        size="meduim"
        link="https://wa.me/5599999999999?text=Olá,%20gostaria%20de%20mais%20informações"
      />
        </div>
    </header>
  );
}

export default Header;