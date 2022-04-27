import style from './Contact.module.css';

export default function Contact(){
  return(
    <section className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>

          <header className={style.header}>
            <h1 className={style.title}>
              Contact Us
            </h1>
          </header>

          <div className={style.card}>
            <div className={style.contentArea}>
              <h2>Give Us Ashout</h2>
              <div className={style.form}>
                <input 
                  type="text"
                  placeholder="First Name"
                  className={style.input}
                />
                <input 
                  type="text"
                  placeholder="Email"
                  className={style.input}
                />
                <textarea 
                  rows={8}
                  placeholder="Message"
                  className={`${style.input} ${style.textarea}`}
                />

                <button
                  className={style.inputBtn}
                >
                  Submit Request
                </button>
              </div>

              <div className={style.contactLine}>
                <li>
                  25th Legal Street, London, U.K
                </li>
                <li>
                  +1 855 789 - 5789
                </li>
                <li>
                  office@thelaw.com
                </li>
              </div>

            </div>

            <div className={style.mapArea}>
              Maps
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}