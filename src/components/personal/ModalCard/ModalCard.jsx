import styles from './styles/index.module.css';

export default function ModalCard({title, example, placeholder}) {
  return (
    <main className={styles.main}>
      <p className={styles.title}>{title}</p>
      <div className={styles.example}>
        <p className={styles.text}>{example}</p>
        <span className={styles.placeholder}>{placeholder}</span>
      </div>
    </main>
  )
}