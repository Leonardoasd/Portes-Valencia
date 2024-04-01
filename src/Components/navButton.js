import React from 'react';
import styles from "./navButton.module.css";

const navButton = () => {
  return (
    <div className={styles.navButton}>
        <p>
        Enviar <a href="#">WhatsApp </a>  - Llamar <a href="#" >674 983 390</a>
          </p>
    </div>
  )
}

export default navButton