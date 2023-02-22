const Result = ({ result, isNegative }) => {
  return (
    <div className="result">
      <p className="result-pln">
        {result} {isNegative && "Kwota musi mieć wartość dodatnią"}
      </p>
    </div>
  );
};

export default Result;
