import Image from 'next/image';
import style from './style.module.css';

export default function PersonHero(){
  return(
    <section className={style.hero}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.content}>
            <h1 className={style.title}>
              One of the best agencies in Gotham City
            </h1>
            <hr className={style.separator} />
            <h2 className={style.subtitle}>
              Thomas Colson, Leadership of Ace Chemicals
            </h2>
          </div>
        </div>
        <div className={style.personImg} />
      </div>
    </section>
  )
}