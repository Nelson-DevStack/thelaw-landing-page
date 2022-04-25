import { FcDiploma1, FcDiploma2, FcDocument, FcMoneyTransfer } from 'react-icons/fc';
import style from './Grid.module.css';

export default function Grid(){
  return(
    <section className={style.section}>
      <div className={style.card}>
        <div className={style.iconWrapper}>
          <FcMoneyTransfer />
        </div>
        <h1 className={style.cardTitle}>Professional Services</h1>
        <hr className={style.separator} />
        <p className={style.cardText}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi cum nemo odio beatae, modi molestiae eaque accusantium rerum doloremque eos.
        </p>
      </div>

      <div className={style.card}>
        <div className={style.iconWrapper}>
          <FcMoneyTransfer />
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

      {/* <div>
        <div>
          <FcDiploma1 />
        </div>
        <h1>Top Legal Experts</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi cum nemo odio beatae, modi molestiae eaque accusantium rerum doloremque eos.
        </p>
      </div>

      <div>
        <div>
          <FcMoneyTransfer />
        </div>
        <h1>Competitive Pricing</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi cum nemo odio beatae, modi molestiae eaque accusantium rerum doloremque eos.
        </p>
      </div> */}
    </section>
  )
}