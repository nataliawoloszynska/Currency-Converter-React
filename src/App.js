import "./Reset.css";
import "./App.css";
import { useState } from "react";
import Logo from "./components/Logo";
import Result from "./components/Result";

const App = () => {
  const [option, setOption] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(0);

  const getData = () => {
    fetch("https://api.nbp.pl/api/exchangerates/tables/A?format=json")
      .then((response) => response.json())
      .then((data) => {
        const currencyValue = data[0].rates.find(
          (item) => option === item.code
        ).mid;
        setResult(inputValue * currencyValue);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleOptionChange = (e) => {
    setOption(e.target.value);
  };

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const calculate = () => {
    getData();
    return result;
  };

  return (
    <div className="App">
      <div className="converter-container">
        <Logo />
        <section className="converter">
          <div className="currency-settings-container">
            <div className="currency-settings">
              <input
                type="number"
                className="amount-pln"
                min="0"
                placeholder="Kwota"
                onChange={handleInputValue}
              />
              <select className="select-currency" onChange={handleOptionChange}>
                {["EUR", "USD", "CHF"].map((currency, index) => (
                  <option key={index}>{currency}</option>
                ))}
              </select>
            </div>
            <button className="calculate-btn" onClick={calculate}>
              Przelicz
            </button>
          </div>
          <Result result={result} />
        </section>
      </div>
    </div>
  );
};

export default App;
