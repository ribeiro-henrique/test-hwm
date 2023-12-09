import styles from "../styles/index.module.css";
import MinorCard from "../components/main_page/MinorCard/MinorCard";
import MajorCard from "../components/main_page/MajorCard/MajorCard";

export default function Home() {
  return (
    <div className={styles.main}>

      <MajorCard
        iconSrc="/images/icon.svg"
        title="QUESTÕES"
        info="Prepare-se de forma personalizada respondendo ao banco de questões!"
        buttonText="Começar"
        buttonLink="/questions"
      />

      <MinorCard
        iconSrc="/images/Painel.svg"
        title="PERSONALIZAR"
        buttonText="Acessar"
        buttonLink="/personalization"
      />

      <MinorCard
        iconSrc="/images/metricas.svg"
        title="MÉTRICAS"
        buttonText="Acessar"
        buttonLink="/metricas"
      />

      <MajorCard
        iconSrc="/images/Chatbot.svg"
        title="CHATBOT"
        info="Treine através de trívias geradas pelo nosso chatbot do Telegram."
        buttonText="Começar"
        buttonLink="/chatbot"
      />

    </div>
  )
}