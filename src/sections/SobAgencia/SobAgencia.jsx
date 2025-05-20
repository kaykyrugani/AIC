import React from "react";
import { motion } from "framer-motion";
import styles from "./SobAgencia.module.css";
import AgenciaImg from "../../assets/imgs/SobAgencia.jpg";

function SobAgencia() {
  return (
    <motion.section 
      className={styles.sobAgencia}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className={styles.container}>
        <motion.div 
          className={styles.imagem}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img src={AgenciaImg} alt="Sobre a Agência" />
        </motion.div>
        <div className={styles.textos}>
          <motion.div 
            className={styles.texto1}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2>
              Bem-vindo à CCS Advocacia
            </h2>
            <div className={styles.divider}></div>
            <p>Fundada pelo renomado Dr. Carlos Cezar, a CCS Advocacia se destaca pela excelência na prestação de serviços jurídicos. Nossa equipe é formada por profissionais altamente qualificados, comprometidos em oferecer soluções personalizadas e eficazes para cada caso.</p>
          </motion.div>
          <motion.div 
            className={styles.texto2}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2>Nossa Metodologia</h2>
            <div className={styles.divider}></div>
            <p>Na CCS, adotamos uma abordagem personalizada para cada cliente, combinando expertise técnica com atenção individualizada. Nossa metodologia é baseada em análise detalhada, planejamento estratégico e acompanhamento próximo, garantindo os melhores resultados em todas as demandas jurídicas.</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default SobAgencia;