const Result = ({ result, isNegative }) => {
  return (
    <div className="result">
      <p className="result-pln">
        {result} {isNegative}
      </p>
    </div>
  );
};

export default Result;
