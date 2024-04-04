import React from 'react'
import styles from "./QuienesSomos.module.css";
import grua from "../Imagenes/pic04.jpg";
import cajas from "../Imagenes/pic05.jpg"

const QuienesSomos = () => {

    function abrirURL() {
        window.open("/#/Presupuesto", "_self");
      }

  return (
    <div className={styles.quienesSomos}>
        <div className={styles.divLeft} >
            <h2>Portes Valencia, Pequeñas Mudanzas en Valencia</h2>
            <div>
                <img src={grua} alt="grua" />
                <img src={cajas} alt="cajas" />
            </div>
            <button onClick={abrirURL} >Solicitar presupuesto</button>
        </div>
        <div className={styles.divRight} >
            <h1>¿Quienes somos?</h1>
            <p>EMPRESA DE TRANSPORTES Y MUDANZAS EN VALENCIA</p>
            <p>PORTES VALENCIA es una empresa cuya filosofía es la satisfacción total del cliente en todos los aspectos posibles.</p>
            <p>Ofrecemos profesionalidad y calidad en el servicio.
                Somos cuidadosos y transparentes.</p>
            <p>Especialistas en el montaje y desmontaje de todo tipo de mobiliario.</p>
            <p>Nuestro objetivo primordial siempre ha sido satisfacer al máximo a nuestros
                clientes. Un cliente satisfecho suele proporcionar mas clientes, por eso 
                el boca a boca es nuestra mejor publicidad. De hecho un 80% de nuestros 
                clientes son antiguos clientes o recomendados de estos. Con el devenir de 
                los años hemos crecido y mejorado nuestros servicios sin perder 
                esta filosofía.</p>
            <p>Portes Valencia nació de la necesidad de los clientes de hacer pequeñas mudanzas 
                o portes, ya que al no necesitar trasladar un piso entero o simplemente por 
                abaratar un poco lo que una mudanza entera pueda conllevar.
                Portes Valencia puede hacer tu pequeña mudanza o Porte mas rápido que cualquier 
                otra gran empresa de mudanzas ya que las mudanzas es si lleva mucho tiempo y 
                dedicación, en Portes Valencia tambien trabajamos los dias festivos pensando 
                en nuestros clientes que por lo que sea no pueden pedir un dia libre en su
                trabajo para realizar su Porte o pequeña mudanza, desde aquí lo entendemos y 
                queremos ayudarte.
                Pidenos presupuesto sin compromiso y comprobaras con que rapidez podemos solucionar 
                y que precios mas competitivos.</p>
            </div>
    </div>
  )
}

export default QuienesSomos