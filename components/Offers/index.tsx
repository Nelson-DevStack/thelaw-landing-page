import { MdPersonalInjury } from 'react-icons/md';
import { ImEarth } from 'react-icons/im';
import { FaUniversity } from 'react-icons/fa';
import { GiFingerPrint } from 'react-icons/gi';
import style from './Offers.module.css';
import SectionIdInteface from '../../types/id';

export default function Offers({ id }: SectionIdInteface){
  return(
    <section className={style.wrapper} id={id}>
      <div className={style.header}>
        <h1 className={style.title}>What we offer our clients</h1>
        <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quasi. </p>
        <hr className={style.separator} />
      </div>

      <div className={style.grid}>
        <div className={style.card}>
          <div className={style.iconArea}>
            <div className={style.iconWrapper}>
              <MdPersonalInjury />
            </div>
          </div>
          <div className={style.cardContent}>
            <h2 className={style.cardTitle}>Focus on Personal Injury Cases</h2>
            <p className={style.cardText}>Our attorneys focus on personal injury cases and we are passionate about pursuing justice on behalf of injury victims and their families.</p>
          </div>
        </div>

        <div className={style.card}>
          <div className={style.iconArea}>
            <div className={style.iconWrapper}>
              <ImEarth />
            </div>
          </div>
          <div className={style.cardContent}>
            <h2 className={style.cardTitle}>Multilingual Staff</h2>
            <p className={style.cardText}>
              Effective communication is the key to our success. Our large multilingual team speaks Spanish and many other languages, and we are happy to answer any questions you may have.
            </p>
          </div>
        </div>

        <div className={style.card}>
          <div className={style.iconArea}>
            <div className={style.iconWrapper}>
              <FaUniversity />
            </div>
          </div>
          <div className={style.cardContent}>
            <h2 className={style.cardTitle}>Harvard Education</h2>
            <p className={style.cardText}>
              The president of West Coast Trial Lawyers, Neama Rahmani, is one of the youngest graduates in the history of Harvard Law School. He earned his degree at 22 years old and went on to build an impressive record as a trial lawyer at one of the largest firms in Los Angeles, then as a federal prosecutor, and now as the co-founder and president of our firm.

            </p>
          </div>
        </div>

        <div className={style.card}>
          <div className={style.iconArea}>
            <div className={style.iconWrapper}>
              <GiFingerPrint />
            </div>
          </div>
          <div className={style.cardContent}>
            <h2 className={style.cardTitle}>
              Former Prosecutor
            </h2>
            <p className={style.cardText}>
              Our lawyers are dedicated to ensuring that justice is served. Prior to establishing West Coast Trial Lawyers, Neama Rahmani served as a federal prosecutor with the United States Attorney’s Office, where he successfully prosecuted high profile drug and human trafficking crimes along the U.S. and Mexico border.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}