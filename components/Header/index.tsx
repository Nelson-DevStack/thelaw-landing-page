import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import style from './Header.module.css';

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
          className={active ? `${style.navLinks} ${style.hidden}` : `${style.navLinks} ${style.visible}`}
        >
          <li className={style.navItem}>
            <a>Home</a>
          </li>
          <li className={style.navItem}>
            <a>Resources</a>
          </li>
          <li className={style.navItem}>
            <a>Offers</a>
          </li>
          <li className={style.navItem}>
            <a>About</a>
          </li>
          <li className={style.navItem}>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}