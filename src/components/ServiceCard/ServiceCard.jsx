import { motion } from "framer-motion";
import styles from "./ServiceCard.module.css";

const ServiceCard = ({ image, title, description, index }) => {
  return (
    <motion.div 
      className={styles.card}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1 
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div 
        className={styles.container}
        whileHover={{ 
          y: -5,
          transition: { duration: 0.2 }
        }}
      >
        <motion.img 
          src={image} 
          alt={title} 
          className={styles.image}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        />
        <motion.div 
          className={styles.text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
