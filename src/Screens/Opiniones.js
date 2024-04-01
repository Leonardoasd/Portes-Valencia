import React from 'react';
import styles from "./Opiniones.module.css";
import { Lista } from "./opinionList"

const Opiniones = () => {
  return (
    <div className={styles.opiniones} >
        <h1>Escribemos tu opinión</h1>
        <p>Su opinión es muy importante para nosotros. Queremos recoger 
        las opiniones de nuestros clientes para mejorar la calidad de 
        nuestro servicio. Muchas gracias!!</p>
        <div className={styles.comentaryBox} >
            <input type="text" placeholder='Nombre' />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Población" />
            <input type="text" placeholder="Provincia" />
            <textarea placeholder="Opinión" className={styles.textarea} />
            <input type="button" value="Enviar" className={styles.button} />
        </div>
        <div>
          <h3>Comentarios...</h3>
          <div className={styles.comments} >
            {Lista.map(x => 
            <div className={styles.divComments} key={x.id} >
              <h3>{x.name + " - " + x.city}</h3>
              <p>{x.date}</p>
              <p>{x.comment}</p>
            </div>
            )}
          </div>
        </div>
    </div>
  )
}

export default Opiniones