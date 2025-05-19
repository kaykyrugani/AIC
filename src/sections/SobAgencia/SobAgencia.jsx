import React from "react";
import styles from "./SobAgencia.module.css";
import AgenciaImg from "../../assets/imgs/SobAgencia.jpg";

function SobAgencia() {
  return (
    <section className={styles.sobAgencia}>
      <div className={styles.container}>
        <div className={styles.imagem}>
          <img src={AgenciaImg} alt="Sobre a Agência" />
        </div>
        <div className={styles.textos}>
          <div className={styles.texto1}>
            <h2>
              Bem vindo
              <br />
              Doutor Carlos Cezar ...
            </h2>
            <p>A CCS foi fundada com o objetivo ...</p>
          </div>
          <div className={styles.texto2}>
            <h2>Nossa forma de trabalhar</h2>
            <p>Nossa metodologia de serviço consiste em ...</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobAgencia;