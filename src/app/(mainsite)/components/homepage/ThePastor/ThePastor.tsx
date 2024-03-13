"use client"
import styles from "./thepastor.module.css"

export default function ThePastor() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src="/img/pastor.png" width={360} height={600} alt="Image of Pastor Mike" />
        </div>
        

        <div className={styles.content}>
            <h2>The Pastor</h2>

            <p>Pastor Mike has been preaching since he was 7 years old travel to many countries Nations. Preaches a message of healing restoration Deliverance new beginning salvation.
            </p>
            <a href="https://www.facebook.com/amenamen.amen.58?mibextid=kFxxJD" target="_blank" className="main-link">Watch Online</a>
        </div>
    </section>
  )
}
