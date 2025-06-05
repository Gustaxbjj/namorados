import './ButtonStart.css';

function ButonStart() {
    function irParaOutraPagina() {
        window.location.href = './pages/Home'; // ou a rota desejada
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
