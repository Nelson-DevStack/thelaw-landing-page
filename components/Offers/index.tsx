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
            <p className={style.cardText}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod necessitatibus deserunt qui sunt, autem incidunt rerum atque voluptas ullam fugiat.
            </p>
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod necessitatibus deserunt qui sunt, autem incidunt rerum atque voluptas ullam fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, illo.
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod necessitatibus deserunt qui sunt, autem incidunt rerum atque voluptas ullam fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur sed corrupti in odio vitae iure qui, illum rerum debitis amet!
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod necessitatibus deserunt qui sunt, autem incidunt rerum atque voluptas ullam fugiat.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}