import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import style from './Header.module.css';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';

export default function Header(){
  const [active, setActive] = useState<boolean>(false);
  const handleBtn = () => {
    setActive(!active);
  }

  return(
    <header className={style.header}>
      <nav className={style.nav}>
        <Link href="/">
          <a className={style.brand}>
            The Law
          </a>
        </Link>

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
              smooth={true}
              onClick={()=> setActive(false)}
            >
              Home
            </ScrollLink>
          </li>
          <li className={style.navItem}>
            <ScrollLink
              to="resources"
              spy={true}
              smooth={true}
              offset={-90}
              onClick={()=> setActive(false)}
            >
              Resources
            </ScrollLink>
          </li>
          <li className={style.navItem}>
            <ScrollLink
              to="offers"
              spy={true}
              smooth={true}
              offset={-70}
              onClick={()=> setActive(false)}
            >
              Offers
            </ScrollLink>
          </li>
          <li className={style.navItem}>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              onClick={()=> setActive(false)}
            >
              About
            </ScrollLink>
          </li>
          <li className={style.navItem}>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-10}
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