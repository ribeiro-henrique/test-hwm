import styles from "../styles/QuestionCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function QuestionCard() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.icon}>
          <Image src="/images/icon.svg" width={60} height={60} />
          <p className={styles.title}>QUESTÕES</p>
        </div>
        <div>
          <p className={styles.info}>Prepare-se de forma personalizada respondendo ao banco de questões!</p>
        </div>
        <div className={styles.buttonContainer}>
          <Link href='/questions'>
            <button className={styles.button}>
              <span>Começar</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}