import CounterComponent from "./components/CounterComponent";
import LightSwitch from "./components/LightSwitch";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import LoginForm from "./components/LoginForm";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthProvider>
      <LoginForm />
      <ThemeProvider>
        <div style={{ minHeight: '100vh', transition: 'all 0.3s ease' }}>
          <CounterComponent />
          <LightSwitch />
        </div>
      </ThemeProvider>
    </AuthProvider>

  );
}

export default App;
