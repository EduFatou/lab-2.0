import React, { useState, useEffect } from 'react';
import CategoriesList from './CategoriesList';
import { Hourglass } from 'react-loader-spinner';
import Marquee from "react-fast-marquee";
import logo1 from '../../../assets/marquee/3M_logo.png';
import logo2 from '../../../assets/marquee/3shape_logo.png';
import logo3 from '../../../assets/marquee/avvbda_logo.png';
import logo4 from '../../../assets/marquee/carestream_logo.png';
import logo5 from '../../../assets/marquee/dental-wings_logo.png';
import logo6 from '../../../assets/marquee/Itero_logo.png';
import logo7 from '../../../assets/marquee/Sirona_logo.png';


const Home = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* {loading && (
        <div className="spinner-overlay">
          <div className="spinner-container">
            <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              colors={['#306cce', '#72a1ed']}
            />
          </div>
        </div>
      )} */}
      <section className="home">
        <article>
          <CategoriesList />
          <section className="login-section">
            <h3>Bienvenid@ a Laboratorio Dental Monzón</h3>
            <p>
              Laboratorio Dental Monzón, donde transformamos sonrisas utilizando las últimas tecnologías y el conocimiento experto de nuestro equipo. Destacamos por ofrecer precios competitivos y resultados excelentes, garantizando la satisfacción de nuestros clientes.
            </p>
          </section>
          <section className="marquee-container">
            <Marquee
              className="marquee"
              autoFill={true}
              speed={40}
              direction="left"
              play={true}
              pauseOnHover={true}
              gradient={true}
              gradientColor={[240, 240, 240]}
              gradientWidth={200}>

              <img src={logo1} alt="3M Logo" className="marquee-logo" />
              <img src={logo2} alt="3shape Logo" className="marquee-logo" />
              <img src={logo3} alt="AVVBDA Logo" className="marquee-logo" />
              <img src={logo4} alt="Carestream Logo" className="marquee-logo" />
              <img src={logo5} alt="Dental Wings Logo" className="marquee-logo" />
              <img src={logo6} alt="Itero Logo" className="marquee-logo" />
              <img src={logo7} alt="Sirona Logo" className="marquee-logo" />
            </Marquee>
          </section>
          <section className='contact-section'>
            <div className='contact-container'>
              <div>
                <p>Conócenos en Sevilla, Calle Monzón, local bajo 6H.</p>
              </div>
              <div>
                <p>Teléfono: +34 652 018 478</p>
              </div>
              <div>
                <a href="mailto:laboratoriodentalmonzon@gmail.com">laboratoriodentalmonzon@gmail.com</a>
              </div>
            </div>
            <div className='map-container'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.208251575949!2d-5.985801400000038!3d37.361248999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c2ae39984d3%3A0xef958880c6c9fa63!2sC.%20Monz%C3%B3n%2C%206%2C%2041012%20Sevilla!5e0!3m2!1ses!2ses!4v1721570125901!5m2!1ses!2ses" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </section>
        </article>
      </section>
    </>
  );
};

export default Home;