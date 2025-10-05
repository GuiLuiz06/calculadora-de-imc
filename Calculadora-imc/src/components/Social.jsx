import "./Social.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
const Social = () => {
  return (
    <div className="social-main">
      <a
        href="https://www.linkedin.com/in/guiilherme-luiz"
        id="linkedin"
        target="_blank"
      >
       <i className="bi bi-linkedin"></i>
      </a>
      <a
        href="https://www.instagram.com/gui.luiz6/?__pwa=1"
        id="instagram"
        target="_blank"
      >
        <i class="bi bi-instagram"></i>
      </a>
      <a href="https://github.com/GuiLuiz06" id="github" target="_blank">
        <i class="bi bi-github"></i>
      </a>
    </div>
  );
};

export default Social;
