import styles from './styles/index.module.css';
import { ToggleBtn } from '../../ToggleBtn/ToggleBtn';

export const QuestionByArea = ({description}) => (
  <div className={styles.areas}>
    <span className={styles.span}>{description}</span>
    <ToggleBtn/>
  </div>
)