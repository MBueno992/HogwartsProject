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

export default InputText;
