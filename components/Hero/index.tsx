import style from './Hero.module.css';

export default function Hero(){
  return(
    <section className={style.hero}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.content}>
            <h1 className={style.title}>Lorem ipsum</h1>
            <h1 className={style.subtitle}>The Texts</h1>
            <p className={style.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam impedit voluptatem sint nisi aliquam harum quo eos quia? Numquam, inventore.
            </p>
            <div className={style.contentFooter}>
              <button className={style.contentButton}>
                Who we are
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}