import styles from './whatwebelieve.module.css';

export default function WhatWeBelieve(){
return (
 <div className={styles.whatWeBelieve}>

    <h2>What<br />We<br /><span className="highlight">Believe</span></h2>

    <p>We believe that God transforms lives, new life is given, miracles, liberations, healings, and life transformation.
</p>
 
    <img src='/img/header-bg.webp' alt='Image of ' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0,0.55)"}} className='shader'></div>
 </div>
)};