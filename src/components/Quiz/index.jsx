import React, { useContext } from 'react';

import { QuestionsContext } from '../../Context/QuestionsContext';

import Card from '../Card';
import Result from '../Result';

import { Container } from './styles';

export default function Quiz() {
  const {
    questions, questionIndex, showResult,
  } = useContext(QuestionsContext);

  return (
    <Container>
      {
        !showResult
          ? <Card questions={questions[questionIndex]} />
          : <Result />
      }

    </Container>
  );
}
