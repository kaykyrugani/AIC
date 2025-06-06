import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./ServiceCard.module.css";

const ServiceCard = ({ image, title, description, detailedDescription, index, registrationLink, featured }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={`${styles.card} ${isFlipped ? styles.flipped : ''} ${featured ? styles.featured : ''}`}
      onClick={handleCardClick}
    >
      <motion.div 
        className={styles.cardInner}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay: index * 0.1
          }
        }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Frente do Card */}
        <div className={`${styles.cardFace} ${styles.cardFront}`}>
          <div className={styles.content}>
            <div>
              <div className={styles.iconContainer}>
                <motion.img 
                  src={image} 
                  alt={title}
                  className={styles.image}
                  initial={{ scale: 0.9 }}
                  whileInView={{ 
                    scale: 1,
                    transition: { 
                      duration: 0.6,
                      ease: [0.34, 1.56, 0.64, 1],
                      delay: 0.2 + (index * 0.1)
                    }
                  }}
                />
              </div>
              
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{description}</p>
              
              {featured && registrationLink && (
                <a 
                  href={registrationLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.registerButton}
                  onClick={(e) => e.stopPropagation()}
                >
                  Acessar Plataforma
                </a>
              )}
            </div>
            
            <motion.div 
              className={styles.readMore}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.3 + (index * 0.1),
                  duration: 0.4
                }
              }}
            >
              <span>Saiba mais</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </div>
          <div className={styles.cardHover} />
        </div>

        {/* Verso do Card */}
        <div className={`${styles.cardFace} ${styles.cardBack}`}>
          <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.detailedDescription}>{detailedDescription}</p>
            {featured && registrationLink && (
              <a 
                href={registrationLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.registerButton}
              >
                Acessar Plataforma
              </a>
            )}
            <div className={styles.readMore}>
              <span>Voltar</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)' }}>
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
