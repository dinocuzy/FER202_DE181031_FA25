import { Button } from "react-bootstrap";
import { useState } from "react";
function LightSwitch() {
    const [isLightOn, setIsLightOn] = useState(false);
    const toggleLight = () => {
        setIsLightOn(!isLightOn);
    }
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
            <h2>Light Switch</h2>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
                The light is {isLightOn ? 'On' : 'Off'}
            </p>
            <Button onClick={toggleLight}
                style={{ ...buttonStyle, background: isLightOn ? '#ff0000ff' : '#0df046ff', color: '#fff' }}>
                {isLightOn ? 'Turn Off' : 'Turn On'}
            </Button>
        </div>
    );
}
export default LightSwitch;