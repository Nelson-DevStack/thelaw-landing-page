import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import style from './Header.module.css';
import { Link as ScrollLink } from 'react-scroll';

export default function Header(){
  const [active, setActive] = useState<boolean>(false);
  const handleBtn = () => {
    setActive(!active);
  }

  return(
    <header className={style.header}>
      <nav className={style.nav}>
        <a className={style.brand}>
          The Law
        </a>

        <button 
          className={style.barsBtn}
          onClick={handleBtn}
        >
          <FaBars />
        </button>

        <ul 
          className={active ? `${style.navLinks} ${style.visible}` : `${style.navLinks}`}
        >
          <li className={style.navItem}>
            <ScrollLink
              to="home"
              spy={true}
              offset={-70}
              onClick={()=> setActive(false)}
            >
              Home
            </ScrollLink>
          </li>
          <li className={style.navItem}>
            <ScrollLink
              to="resources"
              spy={true}
              onClick={()=> setActive(false)}
            >
              Resources
            </ScrollLink>
          </li>
          <li className={style.navItem}>
            <ScrollLink
              to="offers"
              spy={true}
              onClick={()=> setActive(false)}
            >
              Offers
            </ScrollLink>
          </li>
          <li className={style.navItem}>
            <ScrollLink
              to="about"
              spy={true}
              onClick={()=> setActive(false)}
            >
              About
            </ScrollLink>
          </li>
          <li className={style.navItem}>
            <ScrollLink
              to="contact"
              spy={true}
              onClick={()=> setActive(false)}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}