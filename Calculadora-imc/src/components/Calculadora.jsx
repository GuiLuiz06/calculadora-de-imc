import Botao from './Botao'
import './calculadora.css'

const calculadora = () => {
  return (
    <div id="main-calc">
        <form id='form-imc'>
            <div className="form-inputs">
                <div className="controle-form">
                    <label htmlFor="altura">Altura:
                        <input type="text" name='altura' id='altura' placeholder='exemplo 1,80' />
                    </label>
                </div>
                <div className="controle-form">
                    <label htmlFor="peso">Peso:
                        <input type="text" name='peso' id='peso' placeholder='exemplo 74,3' />
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