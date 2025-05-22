import React from 'react';
import { motion } from 'framer-motion';
import styles from './Equipe.module.css';

function Equipe() {
    return (
        <motion.section 
            className={styles.equipe}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.decorativeGrid}></div>
            <div className={styles.container}>
                <motion.div
                    className={styles.textContent}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className={styles.textBox}>
                        <span className={styles.subtitle}>Somos a Agência de Inteligência Concorrencial</span>
                        <h2>Especialistas em transformar dados em estratégias competitivas. <br />Nosso foco é claro:</h2>
                        <div className={styles.divider}></div>
                        <p>Na AIC, atuamos ao lado de empresas que reconhecem o valor da informação, da inovação e da reputação. Trabalhamos para que cada criação, dado ou processo se transforme em um ativo protegido — e também valorizado.</p>
                        <p>Garantimos que a atuação dos nossos clientes esteja em conformidade com as normas de defesa da concorrência, prevenindo riscos e promovendo uma cultura ética, estratégica e sólida de mercado.</p>
                        <p>Protegemos o que torna uma empresa única: marcas, patentes, softwares, direitos autorais, desenhos industriais e segredos de negócio — seja no ambiente físico ou digital. Combinamos proteção jurídica e visão de negócio para transformar ativos invisíveis em vantagem real.</p>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Equipe;