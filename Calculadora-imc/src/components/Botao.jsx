import "./Botao.css";

const Botao = ({ id, text, action }) => {
  const limparForm = (e) => {
    action(e);
  };

  return (
    <button id={id} onClick={limparForm}>
      {text}
    </button>
  );
};

export default Botao;
