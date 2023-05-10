import React, { useContext } from 'react';

import { QuestionsContext } from '../../Context/QuestionsContext';

import { Container } from './styles';

export default function Header() {
  const { showResult, resetQuiz } = useContext(QuestionsContext);

  return (
    <Container showResult={showResult}>
      <h1>Quiz Js e React</h1>
      {showResult && (
        <button type="button" onClick={resetQuiz}>Tentar novamente</button>
      )}
    </Container>
  );
}
