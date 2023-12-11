import { QuestionByArea } from '../QuestionByArea/QuestionByArea';
import styles from './styles/index.module.css';
export default function AreaCard({title, areas}) {
  return (
    <main className={styles.main}>
      <p className={styles.title}>
        {title}
      </p>
      {
        areas.map((area, index) => (
          <QuestionByArea
            key={index}
            description={area}
          />
        ))
      }
    </main>
  )
}
