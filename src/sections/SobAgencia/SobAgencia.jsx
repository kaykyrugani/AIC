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
    >
      <div className={styles.container}>
        <motion.div 
          className={styles.imagem}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src={AgenciaImg} alt="Sobre a Agência" />
        </motion.div>
        <div className={styles.textos}>
          <motion.div 
            className={styles.texto1}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2>
              Bem vindo
              <br />
              Doutor Carlos Cezar ...
            </h2>
            <p>A CCS foi fundada com o objetivo ...</p>
          </motion.div>
          <motion.div 
            className={styles.texto2}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2>Nossa forma de trabalhar</h2>
            <p>Nossa metodologia de serviço consiste em ...</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default SobAgencia;