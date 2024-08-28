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
import imgFerulas from './assets/ferula1.jpg';
import imgImplantes from './assets/implante1.jpg';
import imgRemovibles from './assets/removible.jpg';
import videoFijas from './assets/fijas.mp4';
import videoImplantes from './assets/implante1.mp4';

import imgEduardo from './assets/eduardo1.jpg';
import imgJuanma from './assets/juanma1.jpeg';
import imgJuan from './assets/juan1.jpeg';
import imgGerman from './assets/german.png';

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
  { name: 'Fijas', src: videoFijas, type: 'video' },
  { name: 'Implantes', src: videoImplantes, type: 'video' },
  { name: 'Férulas', src: imgFerulas, type: 'image' },
  { name: 'Removibles', src: imgRemovibles, type: 'image' },
];

export const equipoData = [
  {
    id: 1,
    name: 'Eduardo Fatou',
    role: 'Especialista en prótesis completa de alto impacto y cerámica multicromática.',
    description: 'Con más de 35 años de experiencia, su profundo conocimiento y habilidades refinadas le permiten ajustar cada prótesis con precisión milimétrica, asegurando una integración perfecta y una apariencia natural.',
    imgUrl: imgEduardo
  },
  {
    id: 2,
    name: 'Juan Manuel García',
    role: 'Especialista en diseño digital, zirconio y disilicato.',
    description: 'Su enfoque innovador y meticuloso asegura que cada prótesis se ajuste perfectamente y cumpla con los más altos estándares de durabilidad y estética.',
    imgUrl: imgJuanma
  },
  {
    id: 3,
    name: 'Germán Pérez',
    role: 'Especialista en diseño digital, nuevas tecnologías y cerámica estratificada.',
    description: 'Pionero en la implementación de nuevas tecnologías. Su habilidad para integrar técnicas avanzadas con materiales de última generación garantiza resultados excepcionales.',
    imgUrl: imgGerman
  },
  {
    id: 4,
    name: 'Juan Díaz',
    role: 'Especialista en diseño digital, alta estética en cerámica dental, zirconio, disilicato y carillas.',
    description: 'Su pasión por la estética y su dominio de las tecnologías digitales aseguran prótesis de calidad superior, brindando sonrisas naturales y deslumbrantes.',
    imgUrl: imgJuan
  }
];