import './Carta.css'
import TextCarta from '../componentes/TextCarta.js';
import BtnContinuar from  '../componentes/BtnContinuar.js';
function Carta() {
    return(

        <div className='paidetodos'>
            <TextCarta/>
            <BtnContinuar/>
        </div>
        
    )
}
export default Carta;