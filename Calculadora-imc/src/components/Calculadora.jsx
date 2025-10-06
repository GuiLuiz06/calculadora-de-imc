import Botao from './Botao.jsx'

import { useState } from 'react'

import './calculadora.css'

const Calculadora = ({calcImc}) => {
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")

    const limparForm = (e) => {
        e.preventDefault()
        setHeight("")
        setWeight("")
    }

    const validacaoDigitos = (text) => {
        return text.replace(/[^0-9,]/g, "")
    }

    const digitosNaoAceitosHeight = (e) => {
        const updatedValue = validacaoDigitos(e.target.value)
        
        setHeight(updatedValue)
    }
    const digitosNaoAceitosWeight = (e) => {
        const updatedValue = validacaoDigitos(e.target.value)
        
        setWeight(updatedValue)
    }
  return (
    <div id="main-calc">
        <h2>Calculadora de imc</h2>
        <form id='form-imc'>
            <div className="form-inputs">
                <div className="controle-form">
                    <label htmlFor="height">Altura:
                        <input type="text" name='height' id='height' placeholder='Exemplo 1,80' required onChange={(e) => digitosNaoAceitosHeight(e)} value={height}/>
                    </label>
                </div>
                <div className="controle-form">
                    <label htmlFor="weight">Peso:
                        <input type="text" name='weight' id='weight' placeholder='Exemplo 74,3' required onChange={(e) => digitosNaoAceitosWeight(e)} value={weight}/>
                    </label>
                </div>
            </div>
            <div className="button-action">
                <Botao id="calc-btn" text="Calcular" action={(e) => calcImc(e, height, weight)}/>
                <Botao id="clear-btn" text="Limpar" action={limparForm}/>
            </div>
        </form>
    </div>
  )
}

export default Calculadora