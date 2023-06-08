import './App.css';
import { useState } from 'react';

function App() {

  const [num, setNum] = useState("0");
  const [operator, setOperator] = useState("");
  const [useTempNum, setUseTempNum] = useState(false);
  const [tempNum, setTempNum] = useState("");

  const handleOperatorClick = (operator) => {
    setUseTempNum(true);
    setOperator(operator);
  }

  const handleSecondNum = (newNum) => {
    setTempNum(tempNum + newNum);
  }

  const handleClear = () => {
    setNum("0");
    setTempNum("");
    setUseTempNum(false);
    setOperator("");
  }

  const handleOperation = () => {
    if (operator === '+') {
      setNum(Number(((parseFloat(num) + parseFloat(tempNum))).toLocaleString('fullwide', {maximumSignificantDigits: 6})));
    }
    else if (operator === '-') {
      setNum(Number(((parseFloat(num) - parseFloat(tempNum))).toLocaleString('fullwide', {maximumSignificantDigits: 6})));
    }
    else if (operator === 'x') {
      setNum(Number(((parseFloat(num) * parseFloat(tempNum))).toLocaleString('fullwide', {maximumSignificantDigits: 6})));
    }
    else {
      if (tempNum === '0') {
        setNum("Error");
      }
      else {
        setNum(Number(((parseFloat(num) / parseFloat(tempNum))).toLocaleString('fullwide', {maximumSignificantDigits: 6})));
      }
    }
    setUseTempNum(false);
    setTempNum("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Calculator
        </p>
        <div className="calculator-overall">
          <div>
            <h3 className='number'>
              {useTempNum && tempNum !== '' ? tempNum : num}
            </h3>
          </div>
          <div>
            <button
              className='special-button'
              onClick={handleClear}>
              AC
            </button>
            <button
              className='special-button'
              onClick={() => useTempNum ? setTempNum((Number(tempNum) * -1).toString()) : setNum((Number(num) * -1).toString())}>
              +/-
            </button>
            <button
              className='special-button'
              onClick={() => useTempNum ? setTempNum((num / 100).toString()) : setNum((num / 100).toString())}>
              %
            </button>
            <button
              className='operator-button'
              onClick={() => handleOperatorClick('/')}
            >
              /
            </button>
          </div>
          <div>
            <button
              className='number-button'
              onClick={() => useTempNum ? handleSecondNum("7") : setNum(num === "0" ? "7" : num + "7")}>
              7
            </button>
            <button className='number-button'
              onClick={() => useTempNum ? handleSecondNum("8") : setNum(num === "0" ? "8" : num + "8")}>
              8
            </button>
            <button className='number-button'
              onClick={() => useTempNum ? handleSecondNum("9") : setNum(num === "0" ? "9" : num + "9")}>
              9
            </button>
            <button className='operator-button'
              onClick={() => handleOperatorClick('x')}>
              x
            </button>
          </div>
          <div>
            <button className='number-button'
              onClick={() => useTempNum ? handleSecondNum("4") : setNum(num === "0" ? "4" : num + "4")}>
              4
            </button>
            <button className='number-button'
              onClick={() => useTempNum ? handleSecondNum("5") : setNum(num === "0" ? "5" : num + "5")}>
              5
            </button>
            <button className='number-button'
              onClick={() => useTempNum ? handleSecondNum("6") : setNum(num === "0" ? "6" : num + "6")}>
              6
            </button>
            <button className='operator-button'
              onClick={() => handleOperatorClick('-')}>
              -
            </button>
          </div>
          <div>
            <button className='number-button'
              onClick={() => useTempNum ? handleSecondNum("1") : setNum(num === "0" ? "1" : num + "1")}>
              1
            </button>
            <button className='number-button'
              onClick={() => useTempNum ? handleSecondNum("2") : setNum(num === "0" ? "2" : num + "2")}>
              2
            </button>
            <button className='number-button'
              onClick={() => useTempNum ? handleSecondNum("3") : setNum(num === "0" ? "3" : num + "3")}>
              3
            </button>
            <button className='operator-button'
              onClick={() => handleOperatorClick('+')}>
              +
            </button>
          </div>
          <div>
            <button className='zero-button'
              onClick={() => useTempNum ? handleSecondNum("0") : setNum(num === "0" ? "0" : num + "0")}>
              0
            </button>
            <button className='number-button'
              onClick={() => useTempNum ? handleSecondNum(".") : setNum(num.includes('.') ? num : num + ".")}>
              .
            </button>
            <button className='operator-button'
              onClick={handleOperation}>
              =
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
