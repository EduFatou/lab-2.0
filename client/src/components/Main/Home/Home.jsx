import React, { useState, useEffect } from 'react';
import Categories from '../Categories';
import { Hourglass } from 'react-loader-spinner';
import Marquee from "react-fast-marquee";
import logo1 from '../../../assets/marquee/3M_logo.png';
import logo2 from '../../../assets/marquee/3shape_logo.png';
import logo3 from '../../../assets/marquee/avvbda_logo.png';
import logo4 from '../../../assets/marquee/carestream_logo.png';
import logo5 from '../../../assets/marquee/dental-wings_logo.png';
import logo6 from '../../../assets/marquee/Itero_logo.png';
import logo7 from '../../../assets/marquee/Sirona_logo.png';

import videoimplantes from '../../../assets/implantes.mp4';


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
        <section className="login-section">
          <div className="video-background">
            <video autoPlay loop muted playsInline className="background-video">
              <source src={videoimplantes} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="content-overlay">
            <h2>Bienvenid@ a Laboratorio Dental Monzón</h2>
            <p>
              Un laboratorio de más de 40 años de experiencia, donde transformamos sonrisas utilizando las últimas tecnologías y el conocimiento experto de nuestro equipo. Destacamos por ofrecer precios competitivos y resultados excelentes, garantizando la satisfacción de nuestros clientes.
            </p>
          </div>
        </section>
        <section className="marquee-container">
          <h2>Nuestras Marcas</h2>
          <Marquee
            className="marquee"
            autoFill={true}
            speed={20}
            direction="left"
            play={true}
            pauseOnHover={true}
            gradient={true}
            gradientColor={[255, 255, 255]}
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
        <Categories />
        <section className="contact-section">
          <div className="contact-container">
            <div>
              <h4>Ubicación  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg></h4>
              <p>
                Calle Monzón, local bajo 6H</p>
              <p>Sevilla 41012</p>
            </div>
            <div>
            <a href='tel:+34652108478'><h4>Contacto  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              </h4>
              (+34) 652 018 478</a>
              <a href="mailto:laboratoriodentalmonzon@gmail.com">
              laboratoriodentalmonzon@gmail.com <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg></a>
            </div>
            <div>
              <h4>Horario <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg></h4>
              <p>Lunes - Viernes:</p>
              <p>9:00 AM - 6:00 PM</p>
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