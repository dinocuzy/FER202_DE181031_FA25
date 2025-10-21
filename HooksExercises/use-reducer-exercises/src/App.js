import CounterComponent from "./components/CounterComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import LightSwitch from "./components/LightSwitch";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import QuestionBank from "./components/QuestionBank";
function App() {
  return (
    <div className="App">
      <CounterComponent />
      <LightSwitch />
      <LoginForm />
      <SignUpForm />
      <QuestionBank />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
