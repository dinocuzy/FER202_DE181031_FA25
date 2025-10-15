import { Button } from "react-bootstrap";
import { useState } from "react";
const CounterComponent = () => {
    const [count, setCount] = useState(0);
    const increament = () => { setCount(count + 1); };
    const decreament = () => { setCount(count - 1); };
    const reset = () => { setCount(0); };

    const buttonStyle = {
        margin: '5px',
        padding: '10px 20px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '16px'
    };
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>
            <h2>Counter Component</h2>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
                Count: {count}
            </p>
            <Button onClick={increament}
                style={{ ...buttonStyle, background: '#007bff', color: '#fff' }}>
                Increament
            </Button>
            <Button onClick={decreament}
                style={{ ...buttonStyle, background: '#ffc107', color: '#333' }}>
                Decreament
            </Button>
            <Button onClick={reset}
                style={{ ...buttonStyle, background: '#6c757d', color: '#fff' }}>
                Reset
            </Button>
        </div>
    );
};

export default CounterComponent;