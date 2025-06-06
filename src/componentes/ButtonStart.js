import { useNavigate } from 'react-router-dom';
import './ButtonStart.css';

function ButonStart() {
    const navigate = useNavigate();

    function irParaOutraPagina() {
        navigate('/Botao/Carta');   
    }

    return (
        <div className='paiButton'>
            <div className='button'>
                <button className='buttonStart' onClick={irParaOutraPagina}>
                    Start
                </button>
            </div>
        </div>
    );
}

export default ButonStart;
