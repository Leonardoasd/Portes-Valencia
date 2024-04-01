import React from 'react';
import styles from "./footer.module.css";
import { FaTwitter, FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";

const footer = () => {
  return (
    <footer className={styles.footer} >
        <div className={styles.primerFooter}>
            <p>
                Calle Doctor Peris, 15, 46132 Almassera (Valencia)
                - © portesvalencia.com. Todos los derechos reservados.
            </p>
            <div className={styles.divIcons} >
                <FaTwitter className={styles.icon} />
                <FaFacebookSquare className={styles.icon}/>
                <IoPhonePortraitOutline className={styles.icon}/>
                <FaWhatsapp className={styles.icon}/>
            </div> 
        </div>
        <div className={styles.secondFooter} >
            <div className={styles.divServicios}>
                <a href="#" >- Alquiler de trasteros o guardamuebles</a>
                <a href="#"> - Alquiler de vehiculo con condutor</a>
                <a href="#"> - Empresa mudanza con grúa</a>
                <a href="#"> - Montajes y desmontajes</a>
                <a href="#"> - Mudanzas</a>
                <a href="#"> - Mudanzas baratas valencia</a>
                <a href="#"> - Mudanzas desde torrent</a>
                <a href="#"> - Mudanzas económicas almassera</a>
                <a href="#"> - Mudanzas pequeñas y portes economicos en Valencia</a>
                <a href="#"> - Mudanzas rápidas en Valencia</a>
                <a href="#"> - Pequeñas mudanzas en Valencia</a>
                <a href="#"> - Pequeños portes</a>
                <a href="#"> - Portes dias festivos</a>
                <a href="#"> - Portes y pequeñas mudanzas pueblos de Valencia</a>
            </div>
            <p>PORTES EN VALENCIA, PEQUEÑAS MUDANZAS EN VALENCIA <a href="#">www.portesvalencia.com</a></p>
        </div>
    </footer>
  )
}

export default footer