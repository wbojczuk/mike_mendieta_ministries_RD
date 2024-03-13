import styles from './message.module.css';

export default function Message(){
return (
 <div className={styles.message}>
    <p>God commands us to bring people to the knowledge of him. To reach as many people as possible, we stream live services to Facebook, YouTube, Instagram, hold big tent revivals, auditorium parks, and daily open air meeting prayers.</p>

    <img src="/img/message-bg.png" alt="image of cave" className="bg-img" />
    <div className="shader" style={{backgroundColor: "rgba(255,255,255,0.5)"}}></div>
 </div>
)};