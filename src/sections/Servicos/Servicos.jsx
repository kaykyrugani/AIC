import styles from './Servicos.module.css';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import services from '../../components/ServiceCard/service';

const ServicosSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Quais serviços prestamos ?</h2>
      <div className={styles.cardsContainer}>
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicosSection;
