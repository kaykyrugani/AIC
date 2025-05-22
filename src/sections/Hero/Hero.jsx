import React from 'react';
import styles from './Hero.module.css';

function Hero() {
    return (
        <section className={styles.hero}>
            <img 
                src="/imgs/hero.webp" 
                alt="Background" 
                className={styles.heroImage}
                loading="lazy"
            />
            <div className={styles.overlay}></div>
            <div className={styles.textContainer}>
                <h1>O que você tem de mais <span>valioso</span> está nas suas <span>ideias</span> não no seu estoque.</h1>
                <h2>
                    Seus principais ativos são <span>intangíveis</span>
                    <span className={styles.subtitleText}> invisíveis para muitos, estratégicos para você.</span>
                </h2>
                <p>Consultoria estratégica em propriedade intelectual, concorrência e consumo. Apoiamos marcas que operam no agora e querem operar sempre, com cada vez mais valor.</p>
            </div>
        </section>
    )
}

export default Hero;