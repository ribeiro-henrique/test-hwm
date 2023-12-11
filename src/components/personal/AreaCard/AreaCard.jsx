import styles from './styles/index.module.css';
import { ToggleBtn } from '../../ToggleBtn/ToggleBtn';
export default function AreaCard({title, areas}) {
  console.log(areas);
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

const QuestionByArea = ({description}) => (
  <div className={styles.areas}>
    <span className={styles.span}>{description}</span>
    <ToggleBtn/>
  </div>
)