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
                <div className={styles.divs} >
                  <label>Nombre:</label>
                  <input type="text"/>
                </div>
                <div className={styles.divs}>
                  <label>Email:</label>
                  <input type="text"/>
                </div>
                <div className={styles.divs}>
                  <label>Teléfono de contacto:</label>
                  <input type="text" />
                </div>
                <div className={styles.divs}>
                  <label>Móvil: </label>
                  <input type="text" />
                </div>
                <div className={styles.divs}>
                  <label>¿Cuando se va mudar?:</label>
                  <input type="text" placeholder=' Día y hora aproximados ' />
                </div>
            </div>
            <div className={styles.divTwo}>
              <h3>Detalles de la mudanza</h3>
              <p>Por favor, especifique con todo detalle el contenido completo de su mudanza</p>
              <textarea className={styles.textarea} />
            </div>
            <div className={styles.divThree}>
              <h3>Dirección de origen</h3>
              <div className={styles.divs}>
                <label>Dirección: </label>
                <input type="text" />
              </div>
              <div className={styles.npp}>
                <div >
                  <label>Número:  </label>
                  <input type="text" />
                </div>
                <div>
                  <label>Puerta: </label>
                  <input type="text" />
                </div>
                <div>
                  <label>Piso: </label>
                  <input type="text" />
                </div>
              </div>
              <div className={styles.divs}>
                <label>Localidad: </label>
                <input type="text" />
              </div>
              <div className={styles.divs}>
                <label>C.postal: </label>
                <input type="text" />
              </div>
              <div className={styles.divs}>
                <label>Provincia: </label>
                <select>
                  <option>--Selecciona--</option>
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
                <label>Ascensor: </label>
                <select>
                  <option>¿Dispone de ascensor?</option>
                  <option>Si</option>
                  <option>No</option>
                </select>
              </div>
              <div className={styles.divs}>
                <label>Dirección: </label>
                <input type="text" />
              </div>
              <div className={styles.divs}>
                <label>Tipo de edificio: </label>
                <select>
                  <option>--Seleccione opción--</option>
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
              <div className={styles.divs}>
                <label>Dirección: </label>
                <input type="text" />
              </div>
              <div className={styles.npp}>
                <div >
                  <label>Número:  </label>
                  <input type="text" />
                </div>
                <div>
                  <label>Puerta: </label>
                  <input type="text" />
                </div>
                <div>
                  <label>Piso: </label>
                  <input type="text" />
                </div>
              </div>
              <div className={styles.divs}>
                <label>Localidad: </label>
                <input type="text" />
              </div>
              <div className={styles.divs}>
                <label>C.postal: </label>
                <input type="text" />
              </div>
              <div className={styles.divs}>
                <label>Provincia: </label>
                <select>
                  <option>--Selecciona--</option>
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
                <label>Ascensor: </label>
                <select>
                  <option>¿Dispone de ascensor?</option>
                  <option>Si</option>
                  <option>No</option>
                </select>
              </div>
              <div className={styles.divs}>
                <label>Dirección: </label>
                <input type="text" />
              </div>
              <div className={styles.divs}>
                <label>Tipo de edificio: </label>
                <select>
                  <option>--Seleccione opción--</option>
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