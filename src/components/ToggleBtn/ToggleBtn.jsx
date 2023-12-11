import styles from './styles/index.module.css';
import './styles/index.module.css';
export const ToggleBtn = () => {

  return (
<label className={styles.switch}>       
  <input type="checkbox" />      
   <span className={`${styles.slider} ${styles.round}`}></span>
  </label>
  )
}