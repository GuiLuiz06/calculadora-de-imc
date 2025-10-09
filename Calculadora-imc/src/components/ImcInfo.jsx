import React from "react";
import './ImcInfo.css'
import Botao from "./Botao";
import './Botao.css'

const ImcInfo = ({ data, imc, info, infoClass, resetCalc }) => {
  return (
    <div id="result">
      <p id="imc-number">Seu imc: <span className={infoClass}>{imc}</span></p>
      <p id="imc-info">Situação atual: <span className={infoClass}>{info}</span></p>
      <h3>Confira as classificações abaixo</h3>
      <div id="imc-table">
        <div className="table-header">
          <h4>Imc</h4>
          <h4>Classificação</h4>
          <h4>Obesidade</h4>
        </div>
        {data.map((item) => (
          <div className="table-data" key={item.info}>
            <p id="first">{item.classification}</p>
            <p>{item.info}</p>
            <p>{item.obesity}</p>
          </div>
        ))}
      </div>
      <Botao id='back-btn' text='Voltar' action={resetCalc}/>
    </div>
  );
};

export default ImcInfo;
