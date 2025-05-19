import styles from "./ServiceCard.module.css";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.text}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
