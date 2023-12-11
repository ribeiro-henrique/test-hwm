import { useState } from 'react';
import styles from './styles/index.module.css';

const options = ["TODOS", "ABC", "AMRIGS", "EMARE", "SUS-SP", "UNICAMP", "USP", "UNISESP", "UFS", "UFRJ", "SANTA CASA DE SÃO PAULO"];

export default function ModalCard({title, example, placeholder}) {
  const [showSpecifyTask, setshowSpecifyTask] = useState(false);
  const [selecteds, setSelecteds] = useState([]);

  const handleCheckBoxChange = ({ target: { checked, value }}) => {
    if (value === "TODOS") {
      setSelecteds(checked ? options : []);
      return;
    }
    
    setSelecteds(prev => {
      if (checked) {
        return [...prev, value];
      } else {
        return prev.filter(item => item !== value);
      }
    })
  }

  return (
    
    <main className={styles.main} onClick={() => setshowSpecifyTask(!showSpecifyTask)}>
      <p className={styles.title}>{title}</p>
      <div className={styles.example}>
        <p className={styles.text}>{example}</p>
        <span className={styles.placeholder}>{placeholder}</span>
      </div>
      {
        showSpecifyTask && (
          <div onClick={(e) => e.stopPropagation()} className={styles.optionsContainer}>
          {options.map((item) => (
              <label key={item} className={styles.checkboxLabel} htmlFor="">
                <input
                  value={item}
                  checked={selecteds.includes(item)}
                  type="checkbox"
                  onChange={handleCheckBoxChange}
                />
                <span>{item}</span>
              </label>
            ))
          }</div>
        )
      }
    </main>
  )
}