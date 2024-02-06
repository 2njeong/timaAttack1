import { useDispatch, useSelector } from "react-redux";
import { inputN, renew_input } from "./redux/modules/input";
import { plus_number, minus_number } from "./redux/modules/calculator";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.setInput.input);
  const number = useSelector((state) => state.calculator.number);
  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          value={input}
          onChange={(e) => dispatch(inputN(+e.target.value))}
        />{" "}
        만큼을{" "}
        <button
          onClick={() => {
            dispatch(plus_number(input));
            dispatch(renew_input());
          }}
        >
          더할게요
        </button>
        <button
          onClick={() => {
            dispatch(minus_number(input));
            dispatch(renew_input());
          }}
        >
          뺄게요
        </button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{number}</p>
      </div>
    </div>
  );
}

export default App;
