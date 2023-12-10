import styles from './styles/index.module.css';

export default function ChangeQuestion({text}) {
  
  return (
    <div className={styles.main}>
      <button className={styles.btn}>
        <span>
          {text}
        </span>
      </button>
    </div>
  )
}