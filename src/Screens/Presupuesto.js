import React from 'react';
import styles from "./Presupuesto.module.css"

const Presupuesto = () => {
  return (
    <div className={styles.Presupuesto} id="presupuesto" >
        <h1 className={styles.Title} >Formulario de presupuesto</h1>
        <p className={styles.description} >Por favor rellene el siguiente formulario y le enviaremos el 
            presupuesto lo antes posible. Si lo desea puede llamarnos o 
            contactar por Whatsapp al número del móvil 674 983 390.
             Muchas gracias!
        </p>
        <form className={styles.forms} id="formulario" name="form" >
            <div className={styles.divOne}>
                <h3>Datos de contacto</h3>
                <input type="text" placeholder='Nombre' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Teléfono de contacto' />
                <input type="text" placeholder='Móvil' />
                <input type="text" placeholder='¿Cuando se va mudar? (Dia y hora aproximados) ' />
            </div>
            <div className={styles.divTwo}>
              <h3>Detalles de la mudanza</h3>
              <p>Por favor, especifique con todo detalle el contenido completo de su mudanza</p>
              <textarea className={styles.textarea} />
            </div>
            <div className={styles.divThree}>
              <h3>Dirección de origen</h3>
              <input type="text" placeholder='Dirección' />
              <div className={styles.npp}>
                <input type="text" placeholder='Número' />
                <input type="text" placeholder='Puerta' />
                <input type="text" placeholder='Piso' />
              </div>
              <input type="text" placeholder='Localidad' />
              <input type="text" placeholder='C.Postal' />
              <div className={styles.divs}>
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
              </div>
              <div className={styles.divs}>
                <select className={styles.select}>
                  <option className={styles.optOne}>¿Dispone de ascensor?</option>
                  <option>Si</option>
                  <option>No</option>
                </select>
              </div>
              <input type="text" placeholder='Dirección' />
              <div className={styles.divs}>
                <select className={styles.select}>
                  <option className={styles.optOne}>Tipo de edificio</option>
                  <option>Casa</option>
                  <option>Piso</option>
                  <option>Duplex</option>
                  <option>Oficina</option>
                  <option>Bajo</option>
                </select>
              </div>
            </div>
            <div className={styles.divFour}>
              <h3>Dirección de destino</h3>
              <input type="text" placeholder='Dirección' />
              <div className={styles.npp}>
                <input type="text" placeholder='Número' />
                <input type="text" placeholder='Puerta' />
                <input type="text" placeholder='Piso' />
              </div>
              <input type="text" placeholder='Localidad' />
              <input type="text" placeholder='C.Postal' />
              <div className={styles.divs}>
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
              </div>
              <div className={styles.divs}>
                <select className={styles.select}>
                  <option className={styles.optOne}>¿Dispone de ascensor?</option>
                  <option>Si</option>
                  <option>No</option>
                </select>
              </div>
              <input type="text" placeholder='Dirección' />
              <div className={styles.divs}>
                <select className={styles.select}>
                  <option className={styles.optOne}>Tipo de edificio</option>
                  <option>Casa</option>
                  <option>Piso</option>
                  <option>Duplex</option>
                  <option>Oficina</option>
                  <option>Bajo</option>
                </select>
              </div>
            </div>
            <div className={styles.divFive} >
                <input type="checkbox" />
                <label>He leido y acepto la Política de privacidad</label><br />
                <button>Solicitar</button>
              </div>
        </form>
    </div>
  )
}

export default Presupuesto