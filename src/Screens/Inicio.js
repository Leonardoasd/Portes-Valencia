import React from 'react';
import styles from "./Inicio.module.css";
import ImageGallery from "react-image-gallery";
import { images } from '../Imagenes/imgs';
import atenClient from "../Imagenes/atencionCliente.jpg";
import furgo from "../Imagenes/fondo-porte.jpg";
import sello from "../Imagenes/pic03.jpg"
import "react-image-gallery/styles/css/image-gallery.css";

const Inicio = () => {

  function abrirURL() {
    window.open("/Presupuesto", "_self");
  }

  return (
    <div className={styles.Inicio} id="home" >
        <div className={styles.DivImgFurgo}>
          <div className={styles.divTitulo} >
            <h1 className={styles.saludo}>PORTES <label className={styles.valencia} >VALENCIA</label></h1>
          </div>
        </div>
        <h3>Portes Valencia</h3>
        <p>Contrata con nosotros tus portes y pequeñas mudanzas en 
            Valencia con total seguridad</p>
        <div className={styles.divPresupuesto}>
          <div>
            <h1>Necesitas hacer un porte en Valencia?</h1>
            <button onClick={abrirURL} >Solicitar presupuesto</button>
          </div>
          <p>Consigue con nosotros el mejor presupuesto garantizado</p>
        </div>
        <div className={styles.divGallery}>
          <div className={styles.Gallery} >
            <ImageGallery items={images} showPlayButton={false} />
          </div>
        </div>
        <div className={styles.tresAnuncios} >
          <div>
            <img src={atenClient} alt="imagen" />
            <h2>Calidad en el servicio y atención al cliente</h2>
            <p>Nos importan mucho nuestros clientes</p>
          </div>
          <div>
            <img src={furgo} alt="imagen"/>
            <h2>Experiencia y profesionalidad</h2>
            <p>Un equipo joven, profesional y minucioso.</p>
          </div>
          <div>
            <img src={sello} alt="imagen"/>
            <h2>100% Satisfacción garantizada</h2>
            <p>Logramos la total satisfacción del cliente.</p>
          </div>
        </div>
    </div>
  )
}

export default Inicio