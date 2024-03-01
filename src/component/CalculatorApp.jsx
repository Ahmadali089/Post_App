import React, { useState, useEffect } from "react";
import "./Calculator.css";

const CalculatorApp = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      if (key === "=" || key === "Enter") {
        calculateResult();
      } else if (key === "C" || key === "c") {
        clearInput();
      } else if (
        !isNaN(key) ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/"
      ) {
        handleButtonClick(key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, result, history]);

  const handleButtonClick = (value) => {
    if (value === "=") {
      calculateResult();
    } else if (value === "C") {
      clearInput();
    } else {
      if (value === "+" || value === "*" || value === "-" || value === "/") {
        if (
          input.endsWith("+") ||
          input.endsWith("-") ||
          input.endsWith("*") ||
          input.endsWith("/")
        ) {
          return;
        }
      }
      setInput((again) => again + value);
    }
  };

  const calculateResult = () => {
    try {
      // eslint-disable-next-line no-eval
      const newResult = eval(input).toString();
      setResult(newResult);
      setHistory((prevHistory) => [
        ...prevHistory,
        { input, result: newResult },
      ]);
    } catch (error) {
      setResult("Please Enter A Number");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return (
    <table className="calculatorBody">
      <div>
        <tr>
          <td>
            <h1 style={{ color: "white", marginLeft: "85px" }}>Calculator</h1>
          </td>
          <td>
            <h1 style={{ color: "white", marginLeft: "315px" }}>History</h1>
          </td>
        </tr>
        <div style={{ position: "absolute" }}>
          <tr>
            <td>
              <div className="history">
                {history.map((item, index) => (
                  <h3 key={index}>{`${item.input} = ${item.result}`}</h3>
                ))}
              </div>
            </td>
          </tr>
        </div>
        {/* <p>Tanay Pratap</p> */}

        <tr>
          <td>
            <div>
              <input type="text" value={input} placeholder="0" />

              <p className="result">Result: {result}</p>
            </div>
          </td>
        </tr>

        <tr>
          <div>
            <td>
              <button className="number" onClick={() => handleButtonClick("7")}>
                7
              </button>
            </td>
            <td>
              <button className="number" onClick={() => handleButtonClick("8")}>
                8
              </button>
            </td>
            <td>
              <button className="number" onClick={() => handleButtonClick("9")}>
                9
              </button>
            </td>
            <td>
              <button
                className="oprationButton"
                onClick={() => handleButtonClick("/")}
              >
                /
              </button>
            </td>
          </div>
        </tr>

        <tr>
          <div>
            <td>
              <button className="number" onClick={() => handleButtonClick("4")}>
                4
              </button>
            </td>
            <td>
              <button className="number" onClick={() => handleButtonClick("5")}>
                5
              </button>
            </td>
            <td>
              <button className="number" onClick={() => handleButtonClick("6")}>
                6
              </button>
            </td>
            <td>
              <button
                className="oprationButton"
                onClick={() => handleButtonClick("-")}
              >
                -
              </button>
            </td>
          </div>
        </tr>

        <tr>
          <div>
            <td>
              <button className="number" onClick={() => handleButtonClick("1")}>
                1
              </button>
            </td>
            <td>
              <button className="number" onClick={() => handleButtonClick("2")}>
                2
              </button>
            </td>
            <td>
              <button className="number" onClick={() => handleButtonClick("3")}>
                3
              </button>
            </td>
            <td>
              <button
                className="oprationButton"
                onClick={() => handleButtonClick("+")}
              >
                +
              </button>
            </td>
          </div>
        </tr>

        <tr>
          <div>
            <td>
              <button className="number" onClick={() => handleButtonClick("0")}>
                0
              </button>
            </td>
            <td>
              <button
                className="oprationButton"
                onClick={() => handleButtonClick("C")}
              >
                C
              </button>
            </td>
            <td>
              <button
                className="oprationButton"
                onClick={() => handleButtonClick("=")}
              >
                =
              </button>
            </td>
            <td>
              <button
                className="oprationButton"
                onClick={() => handleButtonClick("*")}
              >
                *
              </button>
            </td>
          </div>
        </tr>
        <h2 style={{ color: "white", textAlign: "center" }}>
          Developed by &copy; AHMAD ALI
        </h2>
      </div>
    </table>
  );
};

export default CalculatorApp;
