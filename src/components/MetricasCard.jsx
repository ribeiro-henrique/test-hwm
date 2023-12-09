import styles from "../styles/MetricasCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function MetricasCard() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.icon}>
          <Image src="/images/metricas.svg" width={50} height={50} />
          <p className={styles.title} style={{marginLeft: '8px'}}>MÉTRICAS</p>
        </div>
        <div className={styles.buttonContainer}>
          <Link href='/'>
            <button className={styles.button}>
              <span>Acessar</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}