import React from 'react';
import styles from './Equipe.module.css';
import EquipeImg from '../../assets/imgs/equipe.png';

function Equipe() {
    return (
        <section className={styles.equipe}>
            <div className={styles.textWrapper}>
                <div className={styles.textBox}>
                    <h2>Nossa equipe está sempre pronta para novos desafios</h2>
                    <p>A tecnologia transforma o mundo a cada dia, conectando pessoas, ideias e soluções. Inovar é essencial para crescer e se destacar em um mercado cada vez mais competitivo e dinâmico.</p>
                </div>
            </div>
            <div className={styles.imgWrapper}>
                <img src={EquipeImg} alt="Equipe" className={styles.equipeImg} />
            </div>
        </section>
    );
}

export default Equipe;