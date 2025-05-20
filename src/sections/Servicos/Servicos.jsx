import { motion } from 'framer-motion';
import styles from './Servicos.module.css';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import services from '../../components/ServiceCard/service';

const ServicosSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Quais serviços prestamos ?</h2>
      <div className={styles.cardsContainer}>
        {services.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1 
            }}
          >
            <ServiceCard
              image={service.image}
              title={service.title}
              description={service.description}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicosSection;
