import Botao from './Botao'
import './calculadora.css'

const calculadora = () => {
  return (
    <div id="main-calc">
        <h2>Calculadora de imc</h2>
        <form id='form-imc'>
            <div className="form-inputs">
                <div className="controle-form">
                    <label htmlFor="height">Altura:
                        <input type="text" name='height' id='height' placeholder='Exemplo 1,80' required />
                    </label>
                </div>
                <div className="controle-form">
                    <label htmlFor="weight">Peso:
                        <input type="text" name='weight' id='weight' placeholder='Exemplo 74,3' required/>
                    </label>
                </div>
            </div>
            <div className="button-action">
                <Botao id="calc-btn" text="Calcular"/>
                <Botao id="clear-btn" text="Limpar"/>
            </div>
        </form>
    </div>
  )
}

export default calculadora