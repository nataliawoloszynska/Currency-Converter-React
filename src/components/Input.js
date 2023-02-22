const Input = ({ handleInputValue }) => {
  return (
    <input
      type="number"
      className="amount-pln"
      placeholder="Kwota"
      onChange={handleInputValue}
    />
  );
};

export default Input;
