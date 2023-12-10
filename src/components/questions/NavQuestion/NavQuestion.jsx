import Image from "next/image";
import Link from "next/link";
import styles from "./styles/NavQuestion.module.css";

export default function NavQuestion() {
  return (
    <div className={styles.main}>
      <Link href="/">
        <button className={styles.button}>
          <span>Voltar</span>
        </button>
      </Link>
      <div className={styles.info}>
        <Image src="/images/icon.svg" width={50} height={50} alt="question-icon" />
        <h1>Questões</h1>
      </div>
    </div>
  )
}