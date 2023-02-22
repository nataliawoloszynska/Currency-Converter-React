import "./Reset.css";
import "./App.css";
import { useState } from "react";
import Logo from "./components/Logo";
import Input from "./components/Input";
import Select from "./components/Select";
import Button from "./components/Button";
import Result from "./components/Result";

const App = () => {
  const [option, setOption] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(0);
  const [isNegative, setIsNegative] = useState("");

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
    if (inputValue < 0 || inputValue == 0) {
      setIsNegative("Kwota musi być wartością dodatnią");
      setResult("");
      return isNegative;
    } else {
      setIsNegative("");
      getData();
    }
  };

  return (
    <div className="App">
      <div className="converter-container">
        <Logo />
        <section className="converter">
          <div className="currency-settings-container">
            <div className="currency-settings">
              <Input handleInputValue={handleInputValue} />
              <Select handleOptionChange={handleOptionChange} />
            </div>
            <Button calculate={calculate} />
          </div>
          <Result result={result} isNegative={isNegative} />
        </section>
      </div>
    </div>
  );
};

export default App;
