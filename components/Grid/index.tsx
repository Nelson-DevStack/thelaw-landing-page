import { FcDiploma1, FcDocument, FcMoneyTransfer } from 'react-icons/fc';
import SectionIdInteface from '../../types/id';
import style from './Grid.module.css';

export default function Grid({ id }: SectionIdInteface){
  return(
    <section className={style.section} id={id}>
      <div className={style.card}>
        <div className={style.iconWrapper}>
          <FcDocument />
        </div>
        <h1 className={style.cardTitle}>Professional Services</h1>
        <hr className={style.separator} />
        <p className={style.cardText}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi cum nemo odio beatae, modi molestiae eaque accusantium rerum doloremque eos.
        </p>
      </div>

      <div className={style.card}>
        <div className={style.iconWrapper}>
          <FcDiploma1 />
        </div>
        <h1 className={style.cardTitle}>Top Legal Experts</h1>
        <hr className={style.separator} />
        <p className={style.cardText}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi cum nemo odio beatae, modi molestiae eaque accusantium rerum doloremque eos. 
        </p>
      </div>

      <div className={style.card}>
        <div className={style.iconWrapper}>
          <FcMoneyTransfer />
        </div>
        <h1 className={style.cardTitle}>Competitive Pricing</h1>
        <hr className={style.separator} />
        <p className={style.cardText}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi cum nemo odio beatae, modi molestiae eaque accusantium rerum doloremque eos.
        </p>
      </div>

    </section>
  )
}