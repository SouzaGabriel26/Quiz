import { useState } from 'react';

const questions = [
  {
    question: 'Qual é a diferença entre let e var no JavaScript?',
    options: ['let é escopo de bloco e var é escopo de função',
      'var é escopo de bloco e let é escopo de função',
      'Não há diferença entre let e var'],
    answer: 'let é escopo de bloco e var é escopo de função',
  },
  {
    question: 'Qual a finalidade da biblioteca React?',
    options: ['Para programação em servidores',
      'Para desenvolvimento de aplicativos mobile',
      'Para construção de interfaces de usuário'],
    answer: 'Para construção de interfaces de usuário',
  },
  {
    question: 'Qual é a diferença entre props e state no React?',
    options: ['Props é somente leitura e state é mutável',
      'Props é mutável e state é somente leitura',
      'Não há diferença entre props e state'],
    answer: 'Props é somente leitura e state é mutável',
  },
  {
    question: 'O que é JSX no React?',
    options: ['Uma linguagem de programação própria do React',
      'Uma extensão do JavaScript que permite escrever HTML dentro do JavaScript',
      'Um compilador de código do React'],
    answer: 'Uma extensão do JavaScript que permite escrever HTML dentro do JavaScript',
  },
  {
    question: 'Qual é a função do método componentDidMount() no React?',
    options: ['É invocado imediatamente após o componente ser criado',
      'É invocado antes do componente ser atualizado',
      'É invocado após o componente ser atualizado'],
    answer: 'É invocado imediatamente após o componente ser criado',
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

  function resetQuiz() {
    setQuestionIndex(0);
    setAnswers([]);
    setShowResult(false);
    setWrong([]);
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
    questions,
    questionIndex,
    handleChangeQuestion,
    checkAnswers,
    showResult,
    wrong,
    resetQuiz,
  };
}
