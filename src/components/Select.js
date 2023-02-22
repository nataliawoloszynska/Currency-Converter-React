const Select = ({ handleOptionChange }) => {
  return (
    <select className="select-currency" onChange={handleOptionChange}>
      {["EUR", "USD", "CHF"].map((currency, index) => (
        <option key={index}>{currency}</option>
      ))}
    </select>
  );
};

export default Select;
