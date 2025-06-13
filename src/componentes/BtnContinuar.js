// BtnContinuar.jsx
import './BtnContinuar.css';
import { useNavigate } from 'react-router-dom';

function BtnContinuar() {
  const navigate = useNavigate(); // Hook de navegação

  const irParaHome = () => {
    navigate('/Botao/Carta/Home'); // Caminho definido no seu arquivo de rotas
  };

  return (
    <div className='paiBtnContinuar'>
      <div className='button'>
        <button className='buttoncontinuar' onClick={irParaHome}>
          Continuar para o acervo 💖
        </button>
      </div>
    </div>
  );
}

export default BtnContinuar;
