import PropTypes from 'prop-types';

function InputText({ inputType, text, desc, value, data }) {
  return (
    <>
      <label>{text}</label>
      <input
        type={inputType}
        id={value}
        placeholder={desc}
        defaultValue={data}
        required
      />
    </>
  );
}

InputText.propTypes = {
  inputType: PropTypes.string,
  text: PropTypes.string,
  desc: PropTypes.string,
  value: PropTypes.string,
  data: PropTypes.string,
};

export default InputText;
