import Image from 'next/image';
import SectionIdInteface from '../../types/id';
import style from './About.module.css';

export default function About({id}: SectionIdInteface){
  return(
    <section className={style.wrapper} id={id}>
      <div className={style.header}>
        <h2 className={style.mainTitle}>
          New York Lawyer Jim Gordon has practiced criminal law exclusively since his call to the Empire State in 2005. He is a senior member of the criminal defence bar with over 15 years experience.
        </h2>
      </div>

      <hr className={style.separator} />

      <div className={style.flex}>
        <div className={style.imageWrapper}>
          <Image src={"https://images.unsplash.com/photo-1610652492500-ded49ceeb378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"} layout="responsive" width={687} height={1030} />
        </div>

        <div className={style.textWrapper}>
          <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia numquam dolorem quidem ipsa nostrum placeat itaque iste tempore quam nihil laudantium temporibus amet cum accusamus quasi totam, recusandae voluptate quas!</p>
          <p className={style.text}>Quia numquam dolorem quidem ipsa nostrum placeat itaque iste tempore quam nihil laudantium temporibus amet cum accusamus quasi totam, recusandae voluptate quas!</p>
        </div>
      </div>

    </section>
  )
}