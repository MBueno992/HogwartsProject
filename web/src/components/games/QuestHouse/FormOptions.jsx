import PropTypes from 'prop-types';

function FormOptions({ answer, house, answerSelect }) {
  return (
    <label className={`formPage__form--answer `}>
      {answer}
      <input
        type="radio"
        value={house}
        onClick={(ev) => {
          answerSelect(ev.target.value);
        }}
      />
    </label>
  );
}

FormOptions.propTypes = {
  answer: PropTypes.string,
  house: PropTypes.string,
  answerSelect: PropTypes.func,
};
export default FormOptions;
