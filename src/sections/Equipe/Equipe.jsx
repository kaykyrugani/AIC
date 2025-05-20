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
        >
            <motion.div 
                className={styles.textWrapper}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <motion.div 
                    className={styles.textBox}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                >
                    <h2>Nossa equipe está sempre pronta para novos desafios</h2>
                    <p>A tecnologia transforma o mundo a cada dia, conectando pessoas, ideias e soluções. Inovar é essencial para crescer e se destacar em um mercado cada vez mais competitivo e dinâmico.</p>
                </motion.div>
            </motion.div>
            <motion.div 
                className={styles.imgWrapper}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <motion.img 
                    src={EquipeImg} 
                    alt="Equipe" 
                    className={styles.equipeImg}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                />
            </motion.div>
        </motion.section>
    );
}

export default Equipe;