import imgCoronaZirconio1 from './assets/corona-zirconio.jpg';
import imgCoronaZirconio2 from './assets/corona-zirconio.jpg';
import imgCoronaZirconio3 from './assets/corona-zirconio.jpg';
import imgCoronaDisilicato1 from './assets/corona-disilicato.jpg';
import imgCoronaMetalSintetizado1 from './assets/corona-metal-sintetizado.jpg';
import imgEstructuraEsqueletica1 from './assets/estructura-esqueletica.jpg';
import imgDentaduraParcial1 from './assets/dentadura-parcial.jpg';
import imgDentaduraCompleta1 from './assets/dentadura-completa.jpg';
import imgProtesisHibrida1 from './assets/protesis-hibrida.jpg';
import imgAtornillado1 from './assets/atornillado.jpg';
import imgSobreDentadura1 from './assets/sobre-dentadura.jpg';
import imgFerulaDescarga1 from './assets/ferula-descarga.jpg';
import imgFerulaBlanqueamiento1 from './assets/ferula-blanqueamiento.jpg';
import imgFerulaMantenimiento1 from './assets/ferula-mantenimiento.jpg';

import imgFijas from './assets/fijas3.png';
import imgFerulas from './assets/ferula.jpg';
import imgImplantes from './assets/implante1.jpg';
import imgRemovibles from './assets/removible.jpg';



export const productList = [
  { product_id: 1, product_name: 'Corona de zirconio', price: 100, description: 'Descubre la resistencia del zirconio monolítico, perfecto para restauraciones impecables tanto en el sector posterior como anterior.', category: 'Fijas', images: [imgCoronaZirconio1, imgCoronaZirconio2, imgCoronaZirconio3] },
  { product_id: 2, product_name: 'Corona de disilicato', price: 100, description: 'Una prótesis que se adhiere con precisión al pilar mediante cementos dentales avanzados.', category: 'Fijas', images: [imgCoronaDisilicato1, imgCoronaZirconio2, imgCoronaZirconio3] },
  { product_id: 3, product_name: 'Corona de metal sintetizado', price: 100, description: 'La durabilidad superior de la corona de metal sintetizado, hecha de una innovadora aleación perfecta para pacientes alérgicos al cobalto.', category: 'Fijas', images: [imgCoronaMetalSintetizado1, imgCoronaZirconio2, imgCoronaZirconio3] },
  { product_id: 4, product_name: 'Estructura esquelética', price: 100, description: 'Resistencia y ligereza en la estructura esquelética de cromo cobalto, combinada con un montaje en resina de alta calidad.', category: 'Removibles', images: [imgEstructuraEsqueletica1, imgCoronaZirconio2, imgCoronaZirconio3] },
  { product_id: 5, product_name: 'Dentadura parcial', price: 100, description: 'Las dentaduras parciales mucosoportadas están diseñadas para reemplazar con naturalidad parte de los dientes.', category: 'Removibles', images: [imgDentaduraParcial1, imgCoronaZirconio2, imgCoronaZirconio3] },
  { product_id: 6, product_name: 'Dentadura completa', price: 100, description: 'dentadura completa hecha de acrílico rígido, reemplazando la totalidad de tus dientes con comodidad.', category: 'Removibles', images: [imgDentaduraCompleta1, imgCoronaZirconio2, imgCoronaZirconio3] },
  { product_id: 7, product_name: 'Prótesis Híbrida', price: 100, description: 'Estabilidad y funcionalidad en las prótesis híbridas sobre implantes, fusionando lo mejor de ambos mundos.', category: 'Implantes', images: [imgProtesisHibrida1, imgCoronaZirconio2, imgCoronaZirconio3] },
  { product_id: 8, product_name: 'Atornillado', price: 100, description: 'Las prótesis atornilladas, sustituyen la raíz que falta, se fijan con precisión al pilar mediante una rosca o tornillo, asegurando un ajuste perfecto.', category: 'Implantes', images: [imgAtornillado1, imgCoronaZirconio2, imgCoronaZirconio3] },
  { product_id: 9, product_name: 'Sobre Dentadura', price: 100, description: 'La Sobre Dentadura, una solución mixta que cubre los implantes dentales osteo-integrados con una base de resina.', category: 'Implantes', images: [imgSobreDentadura1, imgCoronaZirconio2, imgCoronaZirconio3] },
  { product_id: 10, product_name: 'Férula de descarga', price: 100, description: 'Protege tus dientes y alivia la tensión muscular con nuestras férulas de descarga, diseñadas para evitar desgastes y promover la relajación mandibular.', category: 'Férulas', images: [imgFerulaDescarga1, imgCoronaZirconio2, imgCoronaZirconio3] },
  { product_id: 11, product_name: 'Férula de blanqueamiento', price: 100, description: 'Logra una sonrisa brillante con nuestras férulas de blanqueamiento, adaptadas a las necesidades mandibulares y maxilares de cada paciente.', category: 'Férulas', images: [imgFerulaBlanqueamiento1, imgCoronaZirconio2, imgCoronaZirconio3] },
  { product_id: 12, product_name: 'Férula de mantenimiento', price: 100, description: 'Mantén tu sonrisa perfecta con nuestras férulas de mantenimiento, diseñadas para prolongar los resultados de tus tratamientos dentales.', category: 'Férulas', images: [imgFerulaMantenimiento1, imgCoronaZirconio2, imgCoronaZirconio3] },
];

export const categories = [
  { name: 'Fijas', img: imgFijas },
  { name: 'Implantes', img: imgImplantes },
  { name: 'Férulas', img: imgFerulas },
  { name: 'Removibles', img: imgRemovibles },
];