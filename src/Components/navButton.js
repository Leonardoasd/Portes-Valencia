import React, {useEffect , useState} from 'react';
import styles from "./navButton.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const NavButton = () => {
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const detectDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener("resize", detectDimension);
    return () => {
      window.removeEventListener("resize", detectDimension)
    }
  },[windowDimension]);

  return (
    <div className={styles.navButton}>
      {(windowDimension.width < 767 ? 
        (<div className={styles.divIcons} ><FaWhatsapp className={styles.wasapIcon} /><FaPhoneAlt className={styles.phoneIcon} /></div>) : 
        (<p> Enviar <a href="#">WhatsApp </a>  - Llamar <a href="#" >674 983 390</a></p>))}  
    </div>
  )
}

export default NavButton