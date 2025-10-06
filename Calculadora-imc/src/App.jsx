import "./App.css";
import { useState } from "react";
import { data } from "./data/data";
import Calculadora from "./components/Calculadora.jsx";
import Social from "./components/Social.jsx";
import { Logo } from "./components/Logo.jsx";
import ImcInfo from "./components/ImcInfo.jsx";

const App = () => {
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if (!height || !weight) return;

    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");

    const calculoImc = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    setImc(calculoImc);

    data.forEach((item) => {
      if (calculoImc >= item.min && calculoImc <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoclass);
      }
    });
  };

  const resetCalc = (e) => {
    e.preventDefault();
    setImc("");
    setInfo("");
    setInfoClass("");
  };

  return (
    <>
      <div className="logo">
        <Logo />
      </div>
      <div className="container">
        {!imc ? (
          <Calculadora calcImc={calcImc} />
        ) : (
          <ImcInfo
            data={data}
            imc={imc}
            info={info}
            infoClass={infoClass}
            resetCalc={resetCalc}
          />
        )}
      </div>
      <div className="social">
        <Social />
      </div>
    </>
  );
};

export default App;