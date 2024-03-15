import styles from './formandmap.module.css';
import FreeEstimateForm from '../FreeEstimateForm/FreeEstimateForm';

export default function FormAndMap(){
return (
 <div className={styles.formAndMap}>
    <div className={styles.formWrapper}>
        <FreeEstimateForm />
    </div>

    <div className={styles.mapWrapper}>
        <div className={styles.menuCover} >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d886192.2699242007!2d-96.06072415541715!3d29.815540834484793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX%2C%20USA!5e0!3m2!1sen!2sza!4v1710486462828!5m2!1sen!2sza" width="600" height="450" style={{border: 0}}  loading="lazy" ></iframe>
        </div>
    </div>
 </div>
)};