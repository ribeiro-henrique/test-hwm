import QuestionCard from "../components/questions/QuestionCard/QuestionCard";
import Options from "../components/questions/Options/Options";
import MinorHeader from "../components/MinorHeader/MinorHeader";
import styles from '../styles/index.module.css';

export default function Questions() {
  return (
    <div className={styles.main}>
      <MinorHeader
        icon='/images/icon.svg'
        alt='question-icon'
        text='Questões'
      />
      <Options />
      <QuestionCard />
    </div>
  )
}