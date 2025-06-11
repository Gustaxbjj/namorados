import './Home.css';
import foto1 from '../imgs/foto1.jpg';
import foto2 from '../imgs/foto2.jpg';
import foto3 from '../imgs/foto3.jpg';
import foto4 from '../imgs/foto4.jpg';
import foto9 from '../imgs/foto9.jpg';
import foto10 from '../imgs/foto10.jpg';
import foto11 from '../imgs/foto11.jpg';
import foto12 from '../imgs/foto12.jpg';

import foto13 from '../imgs/foto13.jpg';
import foto14 from '../imgs/foto14.jpg';
import foto15 from '../imgs/foto15.jpg';
import foto16 from '../imgs/foto16.jpg';
import foto17 from '../imgs/foto17.jpg';
import foto18 from '../imgs/foto18.jpg';
import foto19 from '../imgs/foto19.jpg';
import foto20 from '../imgs/foto20.jpg';

import foto21 from '../imgs/foto21.jpg';
import foto22 from '../imgs/foto22.jpg';
import foto23 from '../imgs/foto23.jpg';
import foto24 from '../imgs/foto24.jpg';
import foto25 from '../imgs/foto25.jpg';
import foto26 from '../imgs/foto26.jpg';
import foto27 from '../imgs/foto27.jpg';
import foto28 from '../imgs/foto28.jpg';

import foto29 from '../imgs/foto29.jpg';
import foto30 from '../imgs/foto30.jpg';
import foto31 from '../imgs/foto31.jpg';
import foto32 from '../imgs/foto32.jpg';
import foto33 from '../imgs/foto33.jpg';


function Home() {
  return (
  <div className='pai'>


<span className='titulo'>Seja Bem-Vinda ao nosso acervo!!</span>


  <div className="carousel">
      <img className="carousel-img" src={foto1} alt="foto1" />
      <img className="carousel-img" src={foto2} alt="foto2" />
      <img className="carousel-img" src={foto3} alt="foto3" />
      <img className="carousel-img" src={foto4} alt="foto4" />
      <img className="carousel-img" src={foto9} alt="foto9" />
      <img className="carousel-img" src={foto10} alt="foto10" />
      <img className="carousel-img" src={foto11} alt="foto11" />
      <img className="carousel-img" src={foto12} alt="foto12" />
    </div>

    <div className='carousel2'>
    <img className="carousel-img2" src={foto13} alt="foto13" />
      <img className="carousel-img2" src={foto14} alt="foto14" />
      <img className="carousel-img2" src={foto15} alt="foto15" />
      <img className="carousel-img2" src={foto16} alt="foto16" />
      <img className="carousel-img2" src={foto17} alt="foto17" />
      <img className="carousel-img2" src={foto18} alt="foto18" />
      <img className="carousel-img2" src={foto19} alt="foto19" />
      <img className="carousel-img2" src={foto20} alt="foto20" />
    </div>
    
        <div className='carousel3'>
    <img className="carousel-img3" src={foto21} alt="foto21" />
      <img className="carousel-img3" src={foto22} alt="foto22" />
      <img className="carousel-img3" src={foto23} alt="foto23" />
      <img className="carousel-img3" src={foto24} alt="foto24" />
      <img className="carousel-img3" src={foto25} alt="foto25" />
      <img className="carousel-img3" src={foto26} alt="foto26" />
      <img className="carousel-img3" src={foto27} alt="foto27" />
      <img className="carousel-img3" src={foto28} alt="foto28" />
    </div>
            <div className='carousel4'>
        <span className='letras'>E</span>

    <img className="carousel-img4" src={foto29} alt="foto29" />

     <span className='letras'>U</span>

      <img className="carousel-img4" src={foto30} alt="foto30" />

       <span className='letras'>T</span>

      <img className="carousel-img4" src={foto31} alt="foto31" />

       <span className='letras'>E</span>

      <img className="carousel-img4" src={foto32} alt="foto32" />

       <span className='letras'>A</span>

      <img className="carousel-img4" src={foto33} alt="foto33" />

     <span className='letras'>MO</span>
    </div>
  </div>
  );
}
export default Home