import React, { useReducer } from "react";
import { Button } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";
const initialState = { count: 0 };
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            return initialState;
    }
}

const CounterComponent = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { theme, toggleTheme } = useTheme();
    const increment = () => {
        dispatch({ type: 'increment' });
    }
    const decrement = () => {
        dispatch({ type: 'decrement' });
    }
    const reset = () => {
        dispatch({ type: 'reset' });
    }
    const buttonStyle = {
        margin: '5px',
        padding: '10px 20px',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '16px'
    };
    return (
        <div style={{ padding: '20px', border: '1   px solid #ccc', borderRadius: '8px' }}>
            <h2>Counter Component</h2>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Count: {state.count}</p>
            <Button
                style={{
                    ...buttonStyle,
                    backgroundColor: theme === 'light' ? '#6c757d' : '#f8f9fa',
                    color: theme === 'light' ? '#ffffff' : '#000000'
                }}
                onClick={toggleTheme}
            >{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</Button>
            <Button
                onClick={increment}
                style={{ ...buttonStyle, backgroundColor: '#4caf50', border: 'none', color: 'white' }}
            >Increment</Button>
            <Button
                onClick={decrement}
                style={{ ...buttonStyle, backgroundColor: '#f44336', border: 'none', color: 'white' }}
            >Decrement</Button>
            <Button
                onClick={reset}
                style={{ ...buttonStyle, backgroundColor: '#2196f3', border: 'none', color: 'white' }}
            >Reset</Button>
        </div>
    );
};
export default CounterComponent;