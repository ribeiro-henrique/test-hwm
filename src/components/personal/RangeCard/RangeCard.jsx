import { useState } from 'react';
import styles from './styles/index.module.css';

export default function Card({title}) {

  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div className={styles.main}>
      <p className={styles.title}>{title}</p>
      <input
        type="range"
        min={0}
        max={200}
        onChange={handleChange}
      />
      <input
        type="text"
        value={value}
        readOnly={true}
      />
    </div>
  )
}