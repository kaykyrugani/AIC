import React from "react";
import { motion } from "framer-motion";
import styles from "./SobAgencia.module.css";
import AgenciaImg from "../../assets/imgs/SobAgencia.jpg";

function SobAgencia() {
  const cards = [
    {
      id: 1,
      title: "Bem-vindo à CCS Advocacia",
      content: "Fundada pelo renomado Dr. Carlos Cezar, a CCS Advocacia se destaca pela excelência na prestação de serviços jurídicos. Nossa equipe é formada por profissionais altamente qualificados, comprometidos em oferecer soluções personalizadas e eficazes para cada caso.",
      img: AgenciaImg,
      delay: 0.3,
      x: -20
    },
    {
      id: 2,
      title: "Nossa Metodologia",
      content: "Na CCS, adotamos uma abordagem personalizada para cada cliente, combinando expertise técnica com atenção individualizada. Nossa metodologia é baseada em análise detalhada, planejamento estratégico e acompanhamento próximo.",
      img: AgenciaImg,
      delay: 0.4,
      x: 0
    },
    {
      id: 3,
      title: "Nossos Valores",
      content: "Nossos valores fundamentais incluem ética, transparência, comprometimento e excelência. Acreditamos que a confiança é a base de qualquer relacionamento e trabalhamos incansavelmente para merecê-la em cada caso que assumimos.",
      img: AgenciaImg,
      delay: 0.5,
      x: 20
    }
  ];

  return (
    <section className={styles.sobAgencia}>
      <div className={styles.container}>
        <div className={styles.cardsContainer}>
          {cards.map((card, index) => (
            <motion.div 
              key={card.id}
              className={`${styles.card} ${styles[`card${index + 1}`]}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.6,
                  ease: "easeOut"
                }
              }}
              viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
            >
              <motion.div 
                className={styles.cardImage}
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ 
                  x: 0, 
                  opacity: 1,
                  transition: { 
                    delay: 0.2,
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }}
                viewport={{ once: true }}
              >
                <img src={card.img} alt={card.title} />
              </motion.div>
              <motion.div 
                className={styles.cardContent}
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ 
                  x: 0, 
                  opacity: 1,
                  transition: { 
                    delay: 0.3,
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }}
                viewport={{ once: true }}
              >
                <h2>{card.title}</h2>
                <div className={styles.divider}></div>
                <p>{card.content}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SobAgencia;