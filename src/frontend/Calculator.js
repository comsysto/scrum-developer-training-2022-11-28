import {useState} from "react";

import './Calculator.css';
import calculate from "../backend/calculationBackend";

function Calculator() {

    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [operation, setOperation] = useState("+");
    const [result, setResult] = useState({result: "", palindrome: false});

    function handleSubmit(event) {
        event.preventDefault();
        setResult(calculate(operation, a, b));
    }

    return (
        <div id="calculator" className={result.palindrome ? 'highlight' : ''}>
            <h2>Agile Calculator</h2>
            <form onSubmit={handleSubmit}>
                <input className={'border'} type="text" value={a} onChange={(e) => setA(e.target.value)} />
                <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                    <option value="+">plus</option>
                    <option value="-">minus</option>
                    <option value="/">divided by</option>
                    <option value="*">multiplied with</option>
                </select>
                <input className={'border'} type="text" value={b} onChange={(e) => setB(e.target.value)} />
                <br />
                <input type="submit" value="Calculate" />
            </form>
            <p>= {result.result}</p>
        </div>

    );
}

export default Calculator;
