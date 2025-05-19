import React from 'react';
import styles from './Hero.module.css';

function Hero() {
    return  (
        <section className={styles.hero}>
            <div className={styles.textContainer}>
                <h1>CCS-Direito Digital</h1>
                <h2>Agencia de advogacia</h2>
                <p>Frase complementar para complementar o texto titulo e subtitulo</p>
            </div>
        </section>
    )
}

export default Hero;