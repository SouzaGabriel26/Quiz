import React, { useContext, useState } from 'react';

import { Box } from './styles';
import { QuestionsContext } from '../../Context/QuestionsContext';

export default function Card({ questions }) {
  const { question, options } = questions;
  const [selectedOption, setSelectedOption] = useState('');

  const { handleChangeQuestion, questionIndex } = useContext(QuestionsContext);

  function handleOptionChange(option) {
    setSelectedOption(option);
  }

  function handleContinue() {
    handleChangeQuestion(selectedOption);
    setSelectedOption('');
  }

  return (
    <Box>

      <h2>{question}</h2>

      <div className="alternatives">
        <ul>
          {options.map((option) => (
            <li key={option}>
              <label htmlFor={option}>
                <input
                  type="radio"
                  value={option}
                  id={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionChange(option)}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>

        <button
          disabled={selectedOption === ''}
          type="button"
          onClick={handleContinue}
        >
          Continuar
        </button>

        <span>
          {questionIndex + 1}
        </span>
      </div>
    </Box>
  );
}
