import styles from './bibleverse.module.css';

export default function BibleVerse(){
return (
 <header className={styles.bibleVerse}>
    
    <p>“Behold, I will bring to it health and healing, and I will heal them and reveal to them abundance of prosperity and security.” <strong>- Jeremiah 33:6</strong></p>

    <img src='/img/bible-bg.png' alt='Image of Bible' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0,0.3)"}} className='shader'></div>
 </header>
)};