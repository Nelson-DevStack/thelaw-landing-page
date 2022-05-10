import style from './Hero.module.css';
import SectionIdInteface from '../../types/id';
import { FaChevronDown } from 'react-icons/fa';
import { VscFoldDown } from 'react-icons/vsc';

export default function Hero({ id }: SectionIdInteface){
  return(
    <section className={style.hero} id={id}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.content}>
            <h1 className={style.title}>The Law</h1>
            <h1 className={style.subtitle}>Lorem ipsum</h1>
            <p className={style.text}>
              Sit amet consectetur, adipisicing elit. Nam impedit voluptatem sint nisi aliquam harum quo eos quia.
            </p>
            {/* <div className={style.contentFooter}>
              <button className={style.contentButton}>
                Who we are
              </button>
            </div> */}
          </div>

          <div className={style.arrowWrapper}>
            <VscFoldDown />
          </div>

        </div>


      </div>
    </section>
  )
}