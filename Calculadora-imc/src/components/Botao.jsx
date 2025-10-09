import "./Botao.css";

const Botao = ({ id, text, action }) => {
  const limparForm = (e) => {
    action(e);
  };

  return (
    <div id="botao-media">
      <button id={id} onClick={limparForm}>
        {text}
      </button>
    </div>
  );
};

export default Botao;
