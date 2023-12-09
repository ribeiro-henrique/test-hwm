import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.main}>
      <div className={styles.nameRole}>
        <p className={styles.name}>HARDWORK</p>
        <span className={styles.role}>MEDICINA</span>
      </div>
      <div className={styles.content}>
        <span>&copy; Copyright 2023 HWM</span>
        <div className={styles.terms}>
          <span>Políticas de Privacidade</span>•<span>Termos de uso</span>
        </div>
      </div>
    </div>
  )
}