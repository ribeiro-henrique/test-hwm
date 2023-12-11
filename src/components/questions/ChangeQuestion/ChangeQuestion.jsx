import styles from './styles/index.module.css';

export default function ChangeQuestion({text, onClick}) {
  
  return (
    <div className={styles.main}>
      <button onClick={onClick} className={styles.btn}>
        <span>
          {text}
        </span>
      </button>
    </div>
  )
}