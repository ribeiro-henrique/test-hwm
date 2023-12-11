import styles from './styles/index.module.css';

export default function AnswerCard({ alternative, text, selected, handleClick }) {


  return (
    <button
      className={`${styles.main} ${selected ? styles.clicked : ''}`}
      onClick={handleClick}
    >
    <p className={styles.alt}>{alternative}</p>
    <p className={styles.text}>{text}</p>
  </button>
  );
}
