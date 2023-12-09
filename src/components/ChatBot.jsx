import styles from "../styles/ChatBot.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ChatBot() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.icon}>
          <Image src="/images/Chatbot.svg" width={60} height={60} />
          <p className={styles.title}>CHATBOT</p>
        </div>
        <div>
          <p className={styles.info}>Treine através de trívias geradas pelo nosso chatbot do Telegram.</p>
        </div>
        <div className={styles.buttonContainer}>
          <Link href='/'>
            <button className={styles.button}>
              <span>Começar</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}