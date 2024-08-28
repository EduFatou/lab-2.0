import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CardList from './CardList';

const Category = () => {
  const { category } = useParams();

  return (
    <section className='category'>
      <h3>
        <Link to="/categorias" style={{ textDecoration: 'none', color: 'inherit' }}>
          categorías/
        </Link>
      </h3>
      <h1>{category}</h1>
      <CardList category={category} />
    </section>
  );
};

export default Category;