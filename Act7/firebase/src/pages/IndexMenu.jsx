import React from 'react';
import Card from '../components/Card';

const IndexMenu = () => {
  return (
    <div>
         <Card link="/movies/list" title="Llistat de Pel·lícules" />
         <Card link="/movies/add" title="Afegir Pel·lícules" />
    </div>
  );
};

export default IndexMenu;
