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
        <h2 className={styles.title}>Consultoria Especializada em Compliance Concorrencial e Propriedade Intelectua</h2>
        <div className={styles.divider} />
        <p className={styles.description}>
        Apoiamos empresas na adoção das melhores práticas de mercado, promovendo conformidade com as normas de concorrência e proteção de ativos intangíveis. Nosso foco está na prevenção de riscos, inovação com segurança e fortalecimento da competitividade no ambiente de negócios..
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
            registrationLink={service.registrationLink}
            featured={service.featured || false}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicosSection;
