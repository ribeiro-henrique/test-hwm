import styles from './styles/index.module.css';
export default function AreaCard({title, area1, area2, area3, area4, area5}) {
  return (
    <main className={styles.main}>
      <p className={styles.title}>
        {title}
      </p>
      <div className={styles.areas}>
        <span>{area1}</span>
        <input type="checkbox"/>
      </div>
      <div className={styles.areas}>
        <span>{area2}</span>
        <input type="checkbox"/>
      </div>
      <div className={styles.areas}> 
        <span>{area3}</span>
        <input type="checkbox"/>
      </div>
      <div className={styles.areas}>
        <span>{area4}</span>
        <input type="checkbox"/>
      </div>
      <div className={styles.areas}>
        <span>{area5}</span>
        <input type="checkbox"/>
      </div>
    </main>
  )
}