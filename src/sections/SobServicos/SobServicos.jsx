import React from 'react';
import styles from './SobServicos.module.css';
import Cta from '../../components/Cta/Cta';

function SobServicos() {
  return (
    <section className={styles.sobService}>
      <div className={styles.bgImage}>
        <div className={styles.overlay}></div>
        <div className={styles.textBox}>
          <div className={styles.conteudo}>
            <h2>Nossa agencia trabalha para te ajudar</h2>
            <div className={styles.textos}>
              <p>Na CCS focamos em deixar nosso cliente ....</p>
              <p>Na CCS focamos em deixar nosso cliente ....</p>
              <p>Na CCS focamos em deixar nosso cliente ....</p>
              <p>Na CCS focamos em deixar nosso cliente ....</p>
            </div>
          </div>
          <div className={styles.ctaWrapper}>
            <Cta text="Conheça nossos serviços" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobServicos;