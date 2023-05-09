import React, { useContext, useEffect } from 'react';
import { QuestionsContext } from '../../Context/QuestionsContext';

import { Container } from './styles';

export default function Result() {
  const { checkAnswers, wrong } = useContext(QuestionsContext);

  useEffect(() => {
    checkAnswers();
  }, []);

  return (
    <Container>
      <h2>Resultado:</h2>
      <p className="info">
        Você
        {wrong && (
          wrong.length === 0
            ? ' acertou tudo'
            : ` errou ${wrong.length}`
        )}
      </p>
      {wrong && (
        wrong.map((question) => (
          <ul key={question.label}>
            <li>
              <p>
                Na pergunta
                {' '}
                <strong>
                  {question.label}
                </strong>
                <br />
                {' '}
                - você marcou
                {' '}
                <strong className="markedWrong">
                  {question.marked}
                  {' '}
                  ❌
                </strong>
              </p>
              <span>
                - resposta correta:
                {' '}
                <strong className="markedRight">
                  {question.right}
                  {' '}
                  ✅
                </strong>
              </span>
            </li>
          </ul>
        ))
      )}
    </Container>
  );
}
