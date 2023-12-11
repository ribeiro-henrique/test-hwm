import React, { useEffect, useState } from 'react';
import styles from './styles/index.module.css';
import { fetchApi } from '../../../services/fetchQuestions';
import AnswerCard from '../AnswerCard/AnswerCard';
import ChangeQuestion from '../ChangeQuestion/ChangeQuestion';

export default function QuestionCard() {
  const [question, setQuestion] = useState(null);
  const [fullObj, setFullObj] = useState(null);
  const [selectedObj, setSelectedObj] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchApi();
        if (data && data.length > 0) {
          setQuestion(data[0]);
          setFullObj(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleChangeQuestion = (index) => {
    setQuestion(fullObj[index]);
  };

  const handleSelectedAnswer = (id) => {
    setSelectedObj(id);
  }

  const indexToLetter = (index) => String.fromCharCode(65 + index);

  return (
    <main className={styles.main}>
      <div className={styles.question}>
        <p>{question?.questao}</p>
      </div>
      {question?.alternativas.map((alternative, index) => (
        <AnswerCard
          key={alternative.id}
          selected={selectedObj === alternative.id}
          handleClick={() => handleSelectedAnswer(alternative.id)}
          alternative={indexToLetter(index)}
          text={alternative.alternativa}
        />
      ))}
      <button className={styles.btn}>
        <span>Confirmar resposta</span>
      </button>
      <div className={styles.opt}>
        {fullObj?.map((item, index) => (
          <ChangeQuestion
            key={item.id_questao} 
            text={item.id_questao}
            onClick={() => handleChangeQuestion(index)}
          />
        ))}
      </div>
    </main>
  );
}
