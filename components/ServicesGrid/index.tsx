import style from './ServicesGrid.module.css';
import { GoLocation } from 'react-icons/go';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { MdOutlineFamilyRestroom } from 'react-icons/md';

export default function ServicesGrid(){
  return(
    <section className={style.wrapper}>
      <div className={style.container}>
        <h1 className={style.title}>
          Services
        </h1>
        <p className={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et doloribus hic, nihil nostrum modi temporibus repellat, id nulla architecto, animi deleniti obcaecati libero ipsa perferendis at natus. Nulla, quae porro?
        </p>

        <div className={style.grid}>
          <div className={style.card}>
            <div className={style.iconWrapper}>
              <GoLocation />
            </div>
            <h1 className={style.cardTitle}>
              Education Law
            </h1>
            <hr className={style.separator} />
          </div>
          <div className={style.card}>
            <div className={style.iconWrapper}>
              <FaMoneyBillAlt />
            </div>
            <h1 className={style.cardTitle}>
              Business Law
            </h1>
            <hr className={style.separator} />
          </div>
          <div className={style.card}>
            <div className={style.iconWrapper}>
              <MdOutlineFamilyRestroom />
            </div>
            <h1 className={style.cardTitle}>
              Family Law
            </h1>
            <hr className={style.separator} />
          </div> 
        </div>
      </div>
    </section>
  )
}