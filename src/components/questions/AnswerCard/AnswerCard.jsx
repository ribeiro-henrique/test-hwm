import styles from './styles/index.module.css';

export default function AnswerCard({ alternative, text }) {
  return (
    <div className={styles.main}>
      <p className={styles.alt}>{alternative}</p>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
