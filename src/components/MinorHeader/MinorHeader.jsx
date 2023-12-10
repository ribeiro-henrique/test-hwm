import Image from "next/image";
import Link from "next/link";
import styles from "./styles/index.module.css";

export default function MinorHeader({icon, alt, text}) {
  return (
    <div className={styles.main}>
      <Link href="/">
        <button className={styles.button}>
          <span>Voltar</span>
        </button>
      </Link>
      <div className={styles.info}>
        <Image src={icon} width={50} height={50} alt={alt} />
        <h1>{text}</h1>
      </div>
    </div>
  )
}