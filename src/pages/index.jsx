import QuestionCard from "../components/QuestionCard";
import PersonalCard from "../components/PersonalCard";
import MetricasCard from "../components/MetricasCard";
import ChatBot from "../components/ChatBot";
import styles from "../styles/index.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <QuestionCard />
      <PersonalCard />
      <MetricasCard />
      <ChatBot />
    </div>
  )
}