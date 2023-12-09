import styles from "../styles/PersonalCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function PersonalCard() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.icon}>
          <Image src="/images/Painel.svg" width={60} height={60} />
          <p className={styles.title}>PERSONALIZAR</p>
        </div>
        <div className={styles.buttonContainer}>
          <Link href='/personal'>
            <button className={styles.button}>
              <span>Acessar</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}