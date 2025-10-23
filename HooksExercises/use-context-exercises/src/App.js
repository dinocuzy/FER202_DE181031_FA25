import CounterComponent from "./components/CounterComponent";
import LightSwitch from "./components/LightSwitch";
import { ThemeProvider } from "./context/ThemeContext";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ThemeProvider>
      <div style={{minHeight:'100vh', transition:'all 0.3s ease'}}>
        <CounterComponent />
        <LightSwitch />
      </div>
    </ThemeProvider>
  );
}

export default App;
