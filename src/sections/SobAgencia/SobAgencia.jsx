import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./SobAgencia.module.css";
const Carlos = '/imgs/Carlos.webp';
const Tamires = '/imgs/tamires.webp';
const Vitor = '/imgs/Vitor.webp';

function SobAgencia() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const cards = [
    {
      id: 1,
      title: "Carlos Cesar Soares",
      content: "Empresário, advogado e diretor comercial na AIC, Carlos Cesar une experiência de mercado com sólida formação em Direito Digital e Compliance. Com mais de 16 anos de trajetória como vendedor, traz para o universo jurídico uma visão prática, orientada a resultados e profundamente conectada às dores e aos objetivos dos negócios. Entusiasta de tecnologia, inovação e estruturação estratégica, atua diretamente na construção de soluções jurídicas aplicáveis, com foco em performance comercial e segurança regulatória. Mais do que teoria, Carlos carrega uma vivência empresarial que molda sua atuação: direta, técnica e comprometida com a entrega.",
      img: Carlos,
      delay: 0.3,
      x: -20
    },
    {
      id: 2,
      title: "Victor Andrade",
      content: "Advogado, professor universitário e doutorando em Direito, Victor Andrade atua com profundidade técnica e inquietude criativa. Especialista em Direito do Consumidor e Processo Civil, é também entusiasta da Propriedade Intelectual — área que enxerga como ponte entre inovação, proteção e desenvolvimento de negócios. Natural de São José dos Campos, Victor traz consigo a energia de quem não desliga nem na praia — literalmente. Autor publicado e apaixonado pelo ensino, acredita no poder transformador da educação jurídica e na aplicação prática do conhecimento como diferencial competitivo. Na AIC, entrega estratégia com método, combinando visão acadêmica, espírito desenvolvimentista e foco real em resultados.",
      img: Vitor,
      delay: 0.4,
      x: 0
    },
    {
      id: 3,
      title: "Thamires Sverzut",
      content: "Head de Operações, Thamires é movida por desafios e pela construção de ambientes empresariais éticos, seguros e preparados para crescer com responsabilidade. Atua com foco em mapeamento de riscos, conformidade regulatória e cultura organizacional — com atenção especial às diretrizes do CADE e às boas práticas de mercado. Empresária resiliente, admiradora da tecnologia e apaixonada por inovação, combina visão estratégica com forte senso prático, sempre orientada a resultados e à melhoria contínua. Sua atuação é marcada por proximidade, firmeza e propósito — ajudando empresas a jogarem limpo, sem abrir mão de competir com inteligência.",
      img: Tamires,
      delay: 0.5,
      x: 20
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className={`${styles.sobAgencia} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.cardsContainer}>
          {cards.map((card, index) => (
            <motion.article 
              key={card.id}
              className={`${styles.card} ${styles[`card${index + 1}`]}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }
              }}
              viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
              aria-label={`Sobre ${card.title}`}
            >
              <motion.figure 
                className={styles.cardImage}
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ 
                  x: 0, 
                  opacity: 1,
                  transition: { 
                    delay: 0.2,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }}
                viewport={{ once: true }}
                aria-hidden="true"
              >
                <img 
                  src={card.img} 
                  alt={card.title} 
                  loading="lazy"
                  width="400"
                  height="400"
                />
              </motion.figure>
              
              <motion.div 
                className={styles.cardContent}
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ 
                  x: 0, 
                  opacity: 1,
                  transition: { 
                    delay: 0.3,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }}
                viewport={{ once: true }}
              >
                <header>
                  <h2>{card.title}</h2>
                  <div className={styles.divider} aria-hidden="true"></div>
                </header>
                <div className={styles.cardBody}>
                  <p>{card.content}</p>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SobAgencia;