import React, { useEffect, useState } from 'react';
import styles from './styles/index.module.css';
import { fetchApi } from '../../../services/fetchQuestions';

export default function QuestionCard() {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchApi();
        setQuestions(data.obj);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(questions);

  return (
    <main className={styles.main}>
      {questions.questao}
    </main>
  )
}

// void