import style from './Header.module.css';

export default function Header(){
  return(
    <header className={style.header}>
      <nav className={style.nav}>
        <a className={style.brand}>
          The Law
        </a>

        <ul className={style.navLinks}>
          <li className={style.navItem}>
            <a>Home</a>
          </li>
          <li className={style.navItem}>
            <a>About</a>
          </li>
          <li className={style.navItem}>
            <a>Team</a>
          </li>
          <li className={style.navItem}>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}