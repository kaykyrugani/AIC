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
                  Excelência em Serviços Jurídicos Personalizados
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
                    <p>Soluções jurídicas criadas sob medida para cada desafio.</p>
                  </div>
                  
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>✓</div>
                    <p>Atuação focada no que torna sua empresa única.</p>
                  </div>
                  
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>✓</div>
                    <p>Atendimento consultivo, próximo e estratégico.</p>
                  </div>
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>✓</div>
                    <p>Diagnóstico jurídico com escuta ativa e análise contextual.</p>
                  </div>
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>✓</div>
                    <p>Contratos, políticas e registros moldados ao seu modelo de negócio.</p>
                  </div>
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>✓</div>
                    <p>Proteção e monetização de ativos intangíveis com foco comercial.</p>
                  </div>
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>✓</div>
                    <p>Inteligência regulatória aplicada à prática empresarial.</p>
                  </div>
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>✓</div>
                    <p>Equilíbrio entre segurança jurídica e liberdade de atuação.</p>
                  </div>
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>✓</div>
                    <p>Olhar técnico que antecipa riscos e identifica oportunidades.</p>
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