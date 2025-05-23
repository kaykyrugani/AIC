import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './SobServicos.module.css';
import Cta from '../../components/Cta/Cta';

function SobServicos() {
  return (
    <section className={styles.sobService}>
      <div className={styles.bgImage}>
        <div className={styles.overlay}>
          {/* Decorative Elements */}
          <div className={styles.decorativeShape1}></div>
          <div className={styles.decorativeShape2}></div>
          <div className={styles.decorativeDots}></div>
        </div>
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
                  Excelência em consultoria de propriedade intelectual e compliance concorrencial.
                </motion.h2>
                
                <motion.div 
                  className={styles.textos}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>✓</div>
                    <p>Soluções moldadas ao seu modelo de negócio.</p>
                  </div>
                  
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>✓</div>
                    <p> Proteção e valorização de ativos intangíveis.</p>
                  </div>
                  
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>✓</div>
                    <p>Diagnóstico com escuta ativa e visão contextual.</p>
                  </div>
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>✓</div>
                    <p>Atendimento consultivo e próximo.</p>
                  </div>
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>✓</div>
                    <p>Inteligência regulatória aplicada à prática empresarial.</p>
                  </div>
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>✓</div>
                    <p> Equilíbrio entre segurança jurídica e liberdade criativa.</p>
                  </div>
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>✓</div>
                    <p>Compliance como vetor de diferenciação.</p>
                  </div>
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>✓</div>
                    <p>Metodologia alinhada à inovação, reputação e posicionamento de marca.</p>
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
                    link="https://wa.me/5511968981392?text=Olá,%20gostaria%20de%20mais%20informações"
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