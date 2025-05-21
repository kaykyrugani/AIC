import { motion } from 'framer-motion';
import styles from './Servicos.module.css';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import services from '../../components/ServiceCard/service';

const ServicosSection = () => {
  return (
    <section className={styles.section} id="servicos">
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.subtitle}>Nossos Serviços</span>
        <h2 className={styles.title}>Soluções Jurídicas Especializadas</h2>
        <div className={styles.divider} />
        <p className={styles.description}>
          Oferecemos serviços jurídicos de excelência, com foco em resultados e na satisfação de nossos clientes.
        </p>
      </motion.div>

      <div className={styles.cardsContainer}>
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            index={index}
            image={service.image}
            title={service.title}
            description={service.description}
            detailedDescription={service.detailedDescription}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicosSection;
