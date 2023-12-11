import Image from "next/image";
import Link from "next/link";
import styles from "./styles/index.module.css";

export const GradiantCard = ({ iconSrc, title, info, buttonText, buttonLink }) => {

  return (
    <div 
      className={styles.main}
      >    
      <div className={styles.icon}>
        <Image src={iconSrc} width={60} height={60} alt="page-icon"/>
        <p className={styles.title}>{title}</p>
      </div>
      <div>
        {info && <p className={styles.info}>{info}</p>}
      </div>
      <div className={styles.buttonContainer}>
        <Link href={buttonLink}>
          <button className={styles.button}>
            <span>{buttonText}</span>
          </button>
        </Link>
      </div>
    </div>
  );
}


