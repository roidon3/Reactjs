import "./App.css";
import react from "react";
import { useState } from "react";
function App() {
  const [result, setresult] = useState(" ");
  function clear() {
    setresult(" ");
  }
  function handleclick(e) {
    setresult(result.concat(e.target.name));
  }
  function removeone() {
    setresult(result.slice(0, result.length - 1));
  }
  function calculate() {
    try {
      setresult(eval(result));
    } catch (err) {
      setresult("error");
    }
  }
  return (
    <div className="App py-5">
      <>
        <div className="calc-body">
          <div className="calc-screen">
            {/* <div id="calc-operation">1234 + 567 + </div>
    <div id="calc-typed">890</div> */}
            <div>
              {" "}
              <input
                value={result}
                type="email"
                class="form-control"
                id=" calc-operation"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <div className="calc-button-row">
            <button className="ac" onClick={clear}>
              AC
            </button>
            <button className="opt">&#43;&#47;&#8722;</button>
            <button name="%" onClick={handleclick} className="opt">
              &#37;
            </button>
            <button name="/" onClick={handleclick} className="opt">
              &#247;
            </button>
            <button name="7" onClick={handleclick}>
              7
            </button>
            <button name="8" onClick={handleclick}>
              8
            </button>
            <button name="9" onClick={handleclick}>
              9
            </button>
            <button name="*" onClick={handleclick} className="opt">
              &#215;
            </button>
            <button name="4" onClick={handleclick}>
              4
            </button>
            <button name="5" onClick={handleclick}>
              5
            </button>
            <button name="6" onClick={handleclick}>
              6
            </button>
            <button name="-" onClick={handleclick} className="opt">
              &#8722;
            </button>
            <button name="1" onClick={handleclick}>
              1
            </button>
            <button name="2" onClick={handleclick}>
              2
            </button>
            <button name="3" onClick={handleclick}>
              3
            </button>
            <button name="+" onClick={handleclick} className="opt">
              &#43;
            </button>
            <button name="0" onClick={handleclick}>
              0
            </button>
            <button name="." onClick={handleclick}>
              .
            </button>
            <button onClick={removeone}>&#9003;</button>
            <button name="=" onClick={calculate} className="opt">
              &#61;
            </button>
          </div>
        </div>
      </>
    </div>
  );
}
export default App;
