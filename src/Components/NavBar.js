import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import styles from "./NavBar.module.css"
import {AiOutlineMenu} from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai";
import logotipo from "../Imagenes/LogoPrincipal.png"
const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [scroll, setScroll] = useState(false);

  const detectDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener("resize", detectDimension);
    windowDimension.width > 900 && setNavBarOpen(false);
    return () => {
      window.removeEventListener("resize", detectDimension)
    }
  },[windowDimension]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  const links = [
    {
      id: 1,
      name: "Inicio",
      link: "/"
    },
    {
      id: 2,
      name: "Quienes somos?",
      link: "/Quienes-somos"
    },
    {
      id: 3,
      name: "Solicitar presupuesto",
      link: "/Presupuesto"
    },
    {
      id: 4,
      name: "Opiniones",
      link: "Opiniones"
    },
    {
      id: 5,
      name: "Contacto",
      link: "Contacto"
    }
  ]
  function Home() {
    window.scrollTo(0,0)
  }
  
  return (
    <div className={navBarOpen === false ? (scroll ? styles.navBarScroll : styles.navBar) : styles.navOpen}>
      {!navBarOpen && 
      <Link className={styles.contLogo} to="/" smooth duration={500} onClick={Home} >
        <img src={logotipo} alt="logotipo" className={styles.logo}/>
      </Link>}
      {!navBarOpen && (windowDimension.width < 900 || windowDimension.height > 1023) ? (
      <AiOutlineMenu onClick={() => setNavBarOpen(!navBarOpen)} className={styles.menuNav} size={25} />
      )
       : ((windowDimension.width < 900 || windowDimension.height > 1023) && (<AiOutlineClose onClick={() => setNavBarOpen(!navBarOpen)} className={styles.closeNav} size={40} />))
       }
      {navBarOpen &&
        <ul className={styles.navOpenContainer}>
        {links.map((x) => (
          <div key={x.id + 4}>
            <NavLink onClick={() => setNavBarOpen(!navBarOpen)}
            to={x.link} 
            className={({ isActive }) =>
              isActive ? styles.navLinkActive : styles.navLink
            }>
              <p className={styles.NavLinkP}>{x.name}</p>
            </NavLink>
            <div className={styles.border}></div>
          </div>
        ))}
        </ul>
      }
      {
        (windowDimension.width > 900 && windowDimension.height < 1023) && 
        (<ul className={styles.linksContainer}>
          {links.map((x) => (
            <div key={x.id + 3} >
              <NavLink
              to={x.link} 
              className={({ isActive }) =>
              isActive ? styles.navLinkActive : styles.navLink
            }>
                <p className={styles.NavLinkP}>{x.name}</p>
              </NavLink>
              <div className={windowDimension.width < 900 ? styles.border : styles.nada}></div>
            </div>
          ))}
          </ul>)
      }
    </div>
  )
}

export default NavBar