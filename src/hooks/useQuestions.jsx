import { useState } from 'react';

const questions = [
  {
    question: 'Qual a data no nosso primeiro beijo?',
    options: ['21/02', '20/02', '25/02'],
    answer: '21/02',
  },
  {
    question: 'Qual o dia que te pedi em namoro?',
    options: ['22/03', '26/02', '26/03'],
    answer: '26/03',
  },
  {
    question: 'Quem ama mais nessa relação?',
    options: ['Gabriel', 'Layza', 'Os dois'],
    answer: 'Gabriel',
  },
];

export default function useQuestions() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [wrong, setWrong] = useState();

  function updateQuestionIndex() {
    setQuestionIndex((prevState) => (
      prevState < questions.length - 1
        ? prevState + 1
        : setShowResult(true)
    ));
  }

  function handleAnswers(marked) {
    setAnswers((prevState) => [
      ...prevState,
      { marked, right: questions[questionIndex].answer, label: questions[questionIndex].question },
    ]);
  }

  function handleChangeQuestion(marked) {
    updateQuestionIndex();
    handleAnswers(marked);
  }

  function checkAnswers() {
    const wrongAnswers = answers.filter((answer) => (
      answer.marked !== answer.right
    ));

    setWrong(wrongAnswers);
  }

  return {
    questions, questionIndex, handleChangeQuestion, checkAnswers, showResult, wrong,
  };
}
