import SectionIdInteface from '../../types/id';
import style from './Contact.module.css';

export default function Contact({ id }: SectionIdInteface){
  return(
    <section className={style.wrapper} id={id}>
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
              {/* Maps */}
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.612966503309!2d-73.98795218452885!3d40.74854111534378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sbr!4v1651084495500!5m2!1sen!2sbr" width="400" height="300" style={{border: "0"}}allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.612966503309!2d-73.98795218452885!3d40.74854111534378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sbr!4v1651084495500!5m2!1sen!2sbr"  style={{border: '0'}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}