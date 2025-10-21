import React,{useReducer} from "react";
import { Button} from "react-bootstrap";
const initialState = { switchOn: false };
function reducer(state, action) {
    switch (action.type) {
        case 'toggle':
            return { switchOn: !state.switchOn };
        default:
            return initialState;
    }
}
const LightSwitch = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const toggleSwitch = () => {
        dispatch({ type: 'toggle' });
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
            <h2>Light Switch Component</h2>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>The light is {state.switchOn ? 'ON' : 'OFF'}</p>
            <Button
                onClick={toggleSwitch}
                style={{ ...buttonStyle, backgroundColor: state.switchOn ? '#4caf50' : '#f44336', border: 'none', color: 'white' }}
            >Toggle Light</Button>
        </div>
    );
}
export default LightSwitch;