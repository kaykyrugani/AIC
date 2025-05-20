import React from 'react';
import { motion } from 'framer-motion';
import styles from './SobServicos.module.css';
import Cta from '../../components/Cta/Cta';

function SobServicos() {
  return (
    <section className={styles.sobService}>
      <div className={styles.bgImage}>
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <motion.div 
            className={styles.textBox}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={styles.contentWrapper}>
              <div className={styles.textContent}>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Excelência em Serviços Jurídicos Personalizados
                </motion.h2>
                <div className={styles.divider}></div>
                
                <motion.div 
                  className={styles.textos}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>✓</div>
                    <p>Atendimento personalizado e dedicado para cada cliente, garantindo soluções jurídicas sob medida para suas necessidades específicas.</p>
                  </div>
                  
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>✓</div>
                    <p>Equipe especializada em diversas áreas do Direito, oferecendo assessoria jurídica completa e estratégica.</p>
                  </div>
                  
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>✓</div>
                    <p>Transparência e comunicação clara em todas as etapas do processo, mantendo você informado sobre cada detalhe do seu caso.</p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className={styles.ctaWrapper}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Cta 
                    text="Conheça nossos serviços" 
                    size="large"
                  />
                </motion.div>
                
                <p className={styles.ctaSubtext}>
                  Entre em contato para uma consulta inicial sem compromisso.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default SobServicos;