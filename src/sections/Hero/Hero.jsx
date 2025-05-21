import React from 'react';
import styles from './Hero.module.css';

function Hero() {
    return  (
        <section className={styles.hero}>
            <div className={styles.textContainer}>
                <h1>O que você tem de mais valioso está nas suas <span>ideias</span> não no seu estoque.</h1>
                <h2><span>Seus principais ativos são </span>intangíveis</h2> invisíveis para muitos, estratégicos para você.
                <p>Consultoria estratégica em propriedade intelectual, concorrência e consumo. Apoiamos marcas que operam no agora  e querem operar sempre, com cada vez mais valor.</p>
            </div>
        </section>
    )
}

export default Hero;