import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [num, setNum] = useState("0");
  const [tempNum, setTempNum] = useState(0);

  const handleOperatorClick = () => {

  }

  const test = 1;

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>
            {num}
          </h1>
          <h2>
            {Number(parseFloat(test.toString())).toFixed(2)}
          </h2>
        </div>
        <div>
          <button
            className='specialButton'
            onClick={() => setNum("0")}>
            AC
          </button>
          <button
            className='specialButton'
            onClick={() => setNum((Number(num) * -1)).toString()}>
            +/-
          </button>
          <button
            className='specialButton'
            onClick={() => setNum((num / 100).toString())}>
            %
          </button>
          <button 
          className='operatorButton'
          onClick={handleOperatorClick}
          >
            /
          </button>
        </div>
        <div>
          <button 
          className='numberButton'
          onClick={() => setNum(num === "0" ? "7" : num + "7")}>
            7
          </button>
          <button className='numberButton'
          onClick={() => setNum(num === "0" ? "8" : num + "8")}>
            8
          </button>
          <button className='numberButton'
          onClick={() => setNum(num === "0" ? "9" : num + "9")}>
            9
          </button>
          <button className='operatorButton'>
            x
          </button>
        </div>
        <div>
          <button className='numberButton'
          onClick={() => setNum(num === "0" ? "4" : num + "4")}>
            4
          </button>
          <button className='numberButton'
          onClick={() => setNum(num === "0" ? "5" : num + "5")}>
            5
          </button>
          <button className='numberButton'
          onClick={() => setNum(num === "0" ? "6" : num + "6")}>
            6
          </button>
          <button className='operatorButton'>
            -
          </button>
        </div>
        <div>
          <button className='numberButton'
          onClick={() => setNum(num === "0" ? "1" : num + "1")}>
            1
          </button>
          <button className='numberButton'
          onClick={() => setNum(num === "0" ? "2" : num + "2")}>
            2
          </button>
          <button className='numberButton'
          onClick={() => setNum(num === "0" ? "3" : num + "3")}>
            3
          </button>
          <button className='operatorButton'>
            +
          </button>
        </div>
        <div>
          <button className='zeroButton'
          onClick={() => setNum(num === "0" ? "0" : num + "0")}>
            0
          </button>
          <button className='numberButton'
          onClick={() => setNum(num + "..")}>
            .
          </button>
          <button className='operatorButton'>
            =
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
