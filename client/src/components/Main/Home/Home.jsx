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

  useEffect(() => {
    const handleContentLoaded = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      handleContentLoaded();
    } else {
      window.addEventListener('load', handleContentLoaded);
    }

    return () => {
      window.removeEventListener('load', handleContentLoaded);
    };
  }, []);

  if (loading) {
    return (
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
    );
  }

  return (
    <section className="home">
        <article>
          <CategoriesList />
          <section className="login-section">
            <h2>Bienvenid@ a Laboratorio Dental Monzón</h2>
            <p>
              Laboratorio Dental Monzón, donde transformamos sonrisas utilizando las últimas tecnologías y el conocimiento experto de nuestro equipo. Destacamos por ofrecer precios competitivos y resultados excelentes, garantizando la satisfacción de nuestros clientes.
            </p>
          </section>
          <section className="marquee-container">
            <Marquee
              // className="marquee"
              // autoFill={true}
              speed={40}
              direction="left"
              play={true}
              pauseOnHover={true}
              gradient={true}
              gradientColor={[240, 240, 240]}
              gradientWidth={300}>

              <img src={logo1} alt="3M Logo" className="marquee-logo" />
              <img src={logo2} alt="3shape Logo" className="marquee-logo" />
              <img src={logo3} alt="AVVBDA Logo" className="marquee-logo" />
              <img src={logo4} alt="Carestream Logo" className="marquee-logo" />
              <img src={logo5} alt="Dental Wings Logo" className="marquee-logo" />
              <img src={logo6} alt="Itero Logo" className="marquee-logo" />
              <img src={logo7} alt="Sirona Logo" className="marquee-logo" />
            </Marquee>
          </section>
          <section className="contact-section">
            <div className="contact-container">
              <div>
                <h4>Ubicación</h4>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                  <path d="M12 5.5c0 3.866-6 10.5-6 10.5S0 9.366 0 5.5a6 6 0 1 1 12 0zM6 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                </svg> Calle Monzón, local bajo 6H, Sevilla</p>
              </div>
              <div>
                <h4>Contacto</h4>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M3.654 1.328a.678.678 0 0 1 1.015-.063L6.29 2.52c.329.329.445.774.312 1.187a1.745 1.745 0 0 1-.547.808l-.252.253a1.745 1.745 0 0 0 0 2.469l3.75 3.75a1.745 1.745 0 0 0 2.469 0l.253-.252c.33-.33.742-.463 1.187-.312l1.25.623c.414.207.879.095 1.188-.214l1.234-1.233c.168-.168.26-.395.26-.626 0-1.285-.476-2.547-1.346-3.418L10.9 2.546C10.29 1.935 9.377 1.502 8.387 1.375 7.444 1.258 6.496 1.478 5.68 1.91L4.79 2.427a.678.678 0 0 1-.81-.085L3.67 1.69a.678.678 0 0 1-.016-.361zM10.59 15.44c-.482.337-1.05.528-1.636.528-.95 0-1.851-.43-2.498-1.078L2.56 10.561a6.13 6.13 0 0 1-1.08-2.497c-.019-.487.123-.957.388-1.365.264-.407.658-.743 1.121-.982L6.5 3.75a1.745 1.745 0 0 1 1.906.439l1.03 1.03c.569.57 1.525 1.526 2.096 2.096l.93.93c.22.22.347.514.367.819.018.293-.04.58-.164.832-.116.235-.34.42-.605.51l-1.134.378z" />
                </svg> +34 652 018 478</p>
                <a href="mailto:laboratoriodentalmonzon@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 3h12a2 2 0 0 1 1.95 2.555l-6.777 4.11a1.5 1.5 0 0 1-1.346 0L.05 3.555z" />
                  <path d="M0 4.697v7.104l5.803-3.518L0 4.697z" />
                  <path d="M10.197 8.283 16 11.8V4.697l-5.803 3.586z" />
                  <path d="M1.803 12.445A2 2 0 0 0 2 13h12a2 2 0 0 0 1.803-1.555L8 8.354l-6.197 4.09z" />
                </svg> laboratoriodentalmonzon@gmail.com</a>
              </div>
              <div>
                <h4>Horario</h4>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                  <path d="M8 3.5a.5.5 0 0 1 .5.5v4.75h4.5a.5.5 0 0 1 0 1H7.5V4a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a7 7 0 1 0 7 7A7 7 0 0 0 8 1zm0 1a6 6 0 1 1-6 6A6 6 0 0 1 8 2z" />
                </svg> Lunes - Viernes: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
            <div className="map-container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.208251575949!2d-5.985801400000038!3d37.361248999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c2ae39984d3%3A0xef958880c6c9fa63!2sC.%20Monz%C3%B3n%2C%206%2C%2041012%20Sevilla!5e0!3m2!1ses!2ses!4v1721570125901!5m2!1ses!2ses" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </section>
        </article>
      </section>
  );
};

export default Home;