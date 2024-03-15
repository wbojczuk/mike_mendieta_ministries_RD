"use client"
import styles from "./support.module.css"

export default function Support() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src="/img/donate-bg.webp" width={360} height={600} alt="People Praising Image" />
        </div>
        

        <div className={styles.content}>
            <h2>Support us</h2>

            <p>Thank You for your incredible generosity. Your donations ensure that we can continue teaching  the world about God’s kingdom.
            </p>
            <a href="https://www.paypal.com/donate/?hosted_button_id=AKDUHAHVA75SQ" target="_blank" className="main-link">Donate via Paypal</a>
        </div>
    </section>
  )
}
