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
              <img
                className="d-block w-100 fixed-size-img"
                src={category.img}
                alt={category.name}
              />
              <Carousel.Caption>
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