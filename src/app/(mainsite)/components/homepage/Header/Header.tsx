import styles from './header.module.css';

export default function Header(){
return (
 <header className={styles.header}>

    <h1>SEÑALES MILAGROS<br /><span>Y</span><br /><span>PRODIGIOS</span></h1>
    
    <div className={`center ${styles.linkWrapper}`}>
      <a className='main-link' href='https://www.facebook.com/amenamen.amen.58?mibextid=kFxxJD' target='_blank'>Watch Online</a>
    </div>

 
   <img src='/img/header-bg.png' alt='Image of People Praising' className='bg-img' />
   <div className='shader'></div>
 </header> 
  
)};