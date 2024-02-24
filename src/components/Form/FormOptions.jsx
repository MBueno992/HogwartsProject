import PropTypes from 'prop-types';

function FormOptions({ answer, house, answerSelect, answerSelected }) {
  return (
    <label className={`formPage__form--answer `}>
      {answer}
      <input
        type="radio"
        value={house}
        onClick={(ev) => {
          answerSelect(ev.target.value);
        }}
        // checked={answerSelected[answerSelected.length - 1] === house}
      />
    </label>
  );
}

FormOptions.propTypes = {
  answer: PropTypes.string,
  style: PropTypes.string,
};
export default FormOptions;
