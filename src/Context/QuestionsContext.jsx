import React, { createContext } from 'react';
import useQuestions from '../hooks/useQuestions';

const QuestionsContext = createContext();

function QuestionsProvider({ children }) {
  const {
    questions, questionIndex, handleChangeQuestion, checkAnswers, showResult, wrong, resetQuiz,
  } = useQuestions();

  return (
    <QuestionsContext.Provider value={
      {
        questions, questionIndex, handleChangeQuestion, checkAnswers, showResult, wrong, resetQuiz,
      }
      }
    >
      {children}
    </QuestionsContext.Provider>
  );
}

export { QuestionsContext, QuestionsProvider };
