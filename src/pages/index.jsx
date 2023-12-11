import styles from "../styles/index.module.css";
import { GradiantCard } from "../components/main_page/GradientCard/GradiantCard";

export default function Home() {
  return (
    <div className={styles.main}>

      <GradiantCard
        iconSrc="/images/icon.svg"
        title="QUESTÕES"
        info="Prepare-se de forma personalizada respondendo ao banco de questões!"
        buttonText="Começar"
        buttonLink="/questions"
      />

      <GradiantCard
        iconSrc="/images/Painel.svg"
        title="PERSONALIZAR"
        buttonText="Acessar"
        buttonLink="/personalization"
      />

      <GradiantCard
        iconSrc="/images/metricas.svg"
        title="MÉTRICAS"
        buttonText="Acessar"
        buttonLink="/metricas"
      />

      <GradiantCard
        iconSrc="/images/Chatbot.svg"
        title="CHATBOT"
        info="Treine através de trívias geradas pelo nosso chatbot do Telegram."
        buttonText="Começar"
        buttonLink="/chatbot"
      />
      
    </div>
  )
}