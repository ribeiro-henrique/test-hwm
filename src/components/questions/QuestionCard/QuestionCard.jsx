import React, { useEffect, useState } from 'react';
import styles from './styles/index.module.css';
import { fetchApi } from '../../../services/fetchQuestions';
import AnswerCard from '../AnswerCard/AnswerCard';
import Options from '../Options/Options';

export default function QuestionCard() {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchApi();
        if (data && data.length > 0) {
          setQuestion(data[0]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(question);

  const indexToLetter = (index) => String.fromCharCode(65 + index);

  return (
    <main className={styles.main}>
      <div className={styles.question}>
        <p>{question?.questao}</p>
      </div>
      {question?.alternativas.map((alternative, index) => (
        <AnswerCard
          key={alternative.id} 
          alternative={indexToLetter(index)}
          text={alternative.alternativa}
        />
      ))}
      <button className={styles.btn}>
        <span>Confirmar resposta</span>
      </button>
    </main>
  );
}
