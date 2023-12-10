import NavQuestion from "../components/questions/NavQuestion/NavQuestion"
import QuestionCard from "../components/questions/QuestionCard/QuestionCard";
import styles from '../styles/index.module.css';

export default function Questions() {
  return (
    <div className={styles.main}>
      <NavQuestion />
      <QuestionCard />
    </div>
  )
}