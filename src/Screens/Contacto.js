import React from 'react';
import styles from "./Contacto.module.css";

const Contacto = () => {
  return (
    <div className={styles.Contacto} >
        <h1>Formulario de contacto</h1>
        <p>Por favor rellene el siguiente formulario y le responderemos 
            lo antes posible. Si lo desea puede llamarnos o contactar por
             whatsapp al número del móvil 674983390. Muchas gracias!</p>
        <form className={styles.form} id="contacto" >
            <div className={styles.divForm} >
                <label>Nombre: </label><input type="text" />
            </div>
            <div className={styles.divForm}>
                <label>Teléfono: </label><input type="text" />
            </div>
            <div className={styles.divForm}>
                <label>Email: </label><input type="text" />
            </div>
            <div className={styles.divForm}>
                <label>Población: </label><input type="text" />
            </div>
            <div className={styles.divForm}>
                <label>Provincia: </label>
                <select>
                    <option>- selecciona -</option>
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
            </div>
            <div className={styles.divForm}>
                <label>Detalles del servicio: </label>
                <textarea />
            </div>
            <div className={styles.divForm2} >
                <input type="checkbox" />
                <label> He leido y acepto la Política de privacidad</label>
            </div>
            <button>Contactar</button>
        </form>
    </div>
  )
}

export default Contacto