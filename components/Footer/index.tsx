import { FaFacebook, FaFacebookF, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import style from './Footer.module.css';

export default function Footer(){
  return(
    <footer className={style.footer}>
      <div className={style.container}>

        <div className={style.first}>
          <div className={style.iconsArea}>
            <div className={style.iconWrapper}>
              <FaFacebookF />
            </div>
            <div className={style.iconWrapper}>
              <FaTwitter />
            </div>
            <div className={style.iconWrapper}>
              <FaLinkedinIn />
            </div>
          </div>

          <div className={style.footerForm}>
            <input 
              className={style.formInput}
              type="text"
              placeholder="Lorem ipsum..."
            />
            <button className={style.formBtn}>
              Lorem ipsum
            </button>
          </div>

        </div>

        <div className={style.footerInfo}>
          <p>Copyright The Law, 2022</p>
          <ul className={style.footerLinks}>
            <li>
              Licenses
            </li>
            <li>
              Styles
            </li>
            <li>
              About
            </li>
          </ul>
        </div>

      </div>

    </footer>
  )
}