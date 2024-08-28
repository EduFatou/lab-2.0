import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { categories } from '../../../../constants';

const CategoriesList = () => {
  
  return (
    <section className='categories'>
      <Carousel className="categories-carousel shadow">
        {categories.map((category, index) => (
          <Carousel.Item key={index}>
            <Link to={`/categorias/${category.name}`} className="category-card">
            {category.type === 'video' ? (
                <video
                  className="d-block w-100 fixed-size-img"
                  src={category.src}
                  alt={category.name}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  className="d-block w-100 fixed-size-img"
                  src={category.src}
                  alt={category.name}
                />
              )}
              <Carousel.Caption className='carousel-title'>
                <h2>{category.name}</h2>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default CategoriesList;