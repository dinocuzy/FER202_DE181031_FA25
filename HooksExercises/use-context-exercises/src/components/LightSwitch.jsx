import React, { useReducer } from "react";
import { Button } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";
const initialState = { switchOn: false };
function reducer(state, action) {
    switch (action.type) {
        case 'toggle':
            return { switchOn: !state.switchOn };
        case 'turnOn':
            return { switchOn: true };
        case 'turnOff':
            return { switchOn: false };
        default:
            return initialState;
    }
}
function LightSwitch() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { theme, toggleTheme } = useTheme();
    const toggle = () => {
        dispatch({ type: 'toggle' });
    }
    const turnOn = () => {
        dispatch({ type: 'turnOn' });
    }
    const turnOff = () => {
        dispatch({ type: 'turnOff' });
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
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Light Switch Component</h2>
            <Button
                onClick={toggleTheme}
                style={{ ...buttonStyle,
                    backgroundColor: theme === 'light' ? '#6c757d' : '#f8f9fa',
                    color: theme === 'light' ? '#ffffff' : '#000000' }}
            >{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</Button>
            <Button
                onClick={toggle}
                style={{ ...buttonStyle, backgroundColor: '#007bff', color: 'white' }}
            >Toggle</Button>
            <Button
                onClick={turnOn}
                style={{ ...buttonStyle, backgroundColor: '#28a745', color: 'white' }}
            >Turn On</Button>
            <Button
                onClick={turnOff}
                style={{ ...buttonStyle, backgroundColor: '#dc3545', color: 'white' }}
            >Turn Off</Button>
        </div>
    );
}
export default LightSwitch;