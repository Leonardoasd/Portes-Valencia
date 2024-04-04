import React from 'react';
import styles from "./Contacto.module.css";

const Contacto = () => {
  return (
    <div className={styles.Contacto} >
        <h1>Formulario de contacto</h1>
        <p>Por favor rellene el siguiente formulario y le responderemos 
            lo antes posible. Si lo desea puede llamarnos o contactar por
             whatsapp al número del móvil 674983390. Muchas gracias!</p>
        <div className={styles.comentaryBox} >
            <input type="text" placeholder='Nombre' />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Población" />
            <select className={styles.select} >
                    <option className={styles.optOne}>Provincia</option>
                    <option>Valencia</option>
                    <option>Madrid</option>
                    <option>Barcelona</option>
                    <option>Tarragona</option>
                    <option>Valladolid</option>
                    <option>Murcia</option>
                    <option>Burgos</option>
                    <option>Alicante</option>
                    <option>Zaragoza</option>
                </select>
            <textarea placeholder="Detalles del servicio" className={styles.textarea} />
            <div className={styles.divForm2} >
                <input type="checkbox" className={styles.checkbox} />
                <label> He leido y acepto la Política de privacidad</label>
            </div>
            <button className={styles.button} >Contactar</button>
        </div>
    </div>
  )
}

export default Contacto