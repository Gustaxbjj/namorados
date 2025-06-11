import './Home.css';
import foto1 from '../imgs/foto1.jpg';

function Home() {
    return (
        <div className='paiFotos'>
            <img className='fotos' src={foto1} alt="foto1" />
        </div>
    );
}

export default Home;
