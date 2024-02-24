import FormOptions from './FormOptions.jsx';
import '../../scss/layout/Form.scss';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form({
  questions,
  getRandomNumber,
  randomOrder,
  setAnswerArray,
  answerArray,
  answerSelect,
  answerSelected,
  resultForm,
}) {
  const [newQuest, setNewQuest] = useState(1);
  const quest = questions.find((qu) => qu.id === newQuest);
  const navigate = useNavigate();

  useEffect(() => {
    const mix = randomOrder.map((num) => {
      return quest.answer[num];
    });
    setAnswerArray(mix);
  }, [newQuest, randomOrder]);

  const changeQuestion = () => {
    if (newQuest < 10) {
      setTimeout(() => getRandomNumber(), 800);
      setTimeout(() => setNewQuest(newQuest + 1), 800);
    } else {
      resultForm();
      navigate('/result');
    }
  };

  return (
    <>
      <section className="formPage">
        <form className="formPage__form" onClick={changeQuestion}>
          <h4 className="formPage__form--question">{quest.question}</h4>
          {answerArray.map((ans, i) => {
            let propertyName = Object.keys(ans)[0];

            return (
              <FormOptions
                key={i}
                answer={ans[propertyName]}
                house={propertyName}
                answerSelect={answerSelect}
                answerSelected={answerSelected}
              />
            );
          })}
        </form>
      </section>
    </>
  );
}

Form.propTypes = {
  questions: PropTypes.array,
  getRandomNumber: PropTypes.func,
  randomOrder: PropTypes.array,
  setAnswerArray: PropTypes.func,
  answerArray: PropTypes.array,
};

export default Form;
