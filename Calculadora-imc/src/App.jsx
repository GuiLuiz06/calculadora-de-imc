import "./App.css";
import Calculadora from "./components/calculadora";
import Social from "./components/Social";
import { Logo } from "./components/Logo";
const App = () => {
  return (
    <>
      <div className="logo">
        <Logo />
      </div>
      <div className="container">
        <Calculadora />
      </div>
      <div className="social">
        <Social />
      </div>
    </>
  );
};

export default App;
