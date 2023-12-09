import styles from "./styles/Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.logo}>
          <span className={styles.span}>LOGOTIPO</span>
        </div>
        <div className={styles.home}>
          <Image src="/images/home-button.svg" width={60} height={40} />
          <p>HOME</p>
        </div>
        <Image src="/images/doutor.png" width={40} height={40} style={{borderRadius: '8px'}}/>
      </div>
    </>
  )
}