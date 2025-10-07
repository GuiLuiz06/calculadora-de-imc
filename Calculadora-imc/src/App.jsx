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

    let found = false;

    data.forEach((item) => {
      if (calculoImc >= item.min && calculoImc <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoclass);
        found = true;
      }
    });
    
    if (!found && calculoImc > data[data.length - 1].max) {
      setInfo("Obesidade extrema - Procure orientação médica");
      setInfoClass("obesity-extreme");
    }
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
          <Calculadora calcImc={calcImc} customClass="ajuste-calculadora" />
        ) : (
          <ImcInfo
            data={data}
            imc={imc}
            info={info}
            infoClass={infoClass}
            resetCalc={resetCalc}
            c
          />
        )}
        <div className="social">
        <Social />
      </div>
      </div>
    </>
  );
};

export default App;