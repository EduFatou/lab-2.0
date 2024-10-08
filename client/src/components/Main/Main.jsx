import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Equipo from './Equipo';
import Categories from './Categories';
import Category from './Home/CategoriesList/Category/Category';

const Main = () => {
  return <main className="main">
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/equipo' element={<Equipo />} />
    <Route path='/categorias' element={<Categories />} />
    <Route path="/categorias/:category" element={<Category />} />
    <Route path='/*' element={<Navigate to={"/"} />} />
  </Routes>
</main>;
};

export default Main;
