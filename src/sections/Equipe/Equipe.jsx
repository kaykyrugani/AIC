import React from 'react';
import { motion } from 'framer-motion';
import styles from './Equipe.module.css';
import EquipeImg from '../../assets/imgs/equipe.png';

function Equipe() {
    return (
        <motion.section 
            className={styles.equipe}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className={styles.container}>
                <motion.div 
                    className={styles.textContent}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.textBox}>
                        <h2>Excelência Jurídica ao Seu Alcance</h2>
                        <div className={styles.divider}></div>
                        <p>Na AIC, a excelência jurídica não é distante — ela é aplicada, estratégica e pensada para a realidade do seu negócio. Combinamos conhecimento técnico profundo, visão de mercado e linguagem acessível para transformar desafios legais em oportunidades de crescimento. Mais do que advogar, entregamos soluções com inteligência e proximidade.</p>
                        
                        <div className={styles.stats}>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>+15</span>
                                <span className={styles.statLabel}>Anos de Experiência</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>+1000</span>
                                <span className={styles.statLabel}>Casos Atendidos</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
                
                <motion.div 
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.imageContainer}>
                        <img 
                            src={EquipeImg} 
                            alt="Nossa Equipe" 
                            className={styles.teamImage}
                        />
                        <div className={styles.imageOverlay}></div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Equipe;