import React from "react";
import { Link } from 'react-router-dom';
import { Card as BootstrapCard } from 'react-bootstrap';
import { categories } from "../../../constants";

const Categories = () => {

  return <section className='card-categories'>
    {categories.map((cat, index) => (
      <Link to={`/categorias/${cat.name}`} className="card-category-title">
        <BootstrapCard key={index} className="mb-4 shadow">
          <BootstrapCard.Img variant="top" src={cat.img} className="card-img" />
          <BootstrapCard.Body>
            <BootstrapCard.Title>{cat.name}</BootstrapCard.Title>
          </BootstrapCard.Body>
        </BootstrapCard>
      </Link>
    ))}
  </section>
};

export default Categories;
